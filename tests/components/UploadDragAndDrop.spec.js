import { render, fireEvent, screen, waitFor } from '@testing-library/vue'
import { nextTick, ref } from 'vue'
import UploadDragDrop from '@/components/UploadDragAndDrop.vue'

function createFakeFile(name, size = 1234, type = 'text/plain') {
  return new File(['x'.repeat(size)], name, { type })
}

describe('UploadDragDrop.vue', () => {
  it('carrega arquivos corretamente via change', async () => {
    const { emitted, container } = render(UploadDragDrop, {
      props: {
        uploadLabel: 'Arraste ou selecione',
      }
    })

    const file = createFakeFile('teste.pdf', 1000, 'application/pdf')
    const input = container.querySelector('input[type="file"]')

    await fireEvent.change(input, {
      target: { files: [file] }
    })

    await waitFor(() => {
      expect(screen.getByText('teste.pdf')).toBeInTheDocument()
    })

    const updateEvent = emitted()['update:modelValue']
    expect(updateEvent).toBeTruthy()
    expect(updateEvent[0][0][0].name).toBe('teste.pdf')
  })

  it('carrega múltiplos arquivos via drop', async () => {
    const { emitted } = render(UploadDragDrop, {
      props: {
        uploadLabel: 'Arraste ou selecione'
      }
    })

    const file1 = createFakeFile('file1.txt')
    const file2 = createFakeFile('file2.jpg')

  
    const dropZone = screen.getByText('Arraste ou selecione').closest('div')

  
    await fireEvent.drop(dropZone, {
      dataTransfer: {
        files: [file1, file2]
      }
    })

    await waitFor(() => {
      expect(screen.getByText('file1.txt')).toBeInTheDocument()
      expect(screen.getByText('file2.jpg')).toBeInTheDocument()
    })

    const updateEvent = emitted()['update:modelValue']
    expect(updateEvent).toBeTruthy()
    expect(updateEvent[0][0].length).toBe(2)
  })

  it('remove arquivo ao clicar no botão de remover', async () => {
  const file = createFakeFile('delete-me.txt')

  const files = ref([file])

  const { emitted } = render(UploadDragDrop, {
    props: {
      modelValue: files.value,
      'onUpdate:modelValue': (newValue) => {
        files.value = newValue  
      },
      uploadLabel: 'Arraste ou selecione',
      showArchives: true,
    }
  })

  await waitFor(() => {
    expect(screen.queryByText('delete-me.txt')).toBeTruthy()
  })

  const fileEl = screen.getByText('delete-me.txt')
  const fileRow = fileEl.parentElement
  const removeButton = fileRow.querySelector('button')
  expect(removeButton).toBeTruthy()

  await fireEvent.click(removeButton)
  await nextTick()

  await waitFor(() => {
    expect(screen.queryByText('delete-me.txt')).toBeNull()
  })

  const updateEvents = emitted()['update:modelValue']
  expect(updateEvents).toBeTruthy()
  expect(updateEvents.at(-1)[0]).toEqual([])
})
  it('exibe label se for passada via props', () => {
    render(UploadDragDrop, {
      props: {
        label: 'Envie seus arquivos'
      }
    })

    expect(screen.getByText('Envie seus arquivos')).toBeInTheDocument()
  })

  it('não exibe lista se showArchives for false', () => {
    const file = createFakeFile('hidden.txt')

    render(UploadDragDrop, {
      props: {
        modelValue: [file],
        showArchives: false
      }
    })

    expect(screen.queryByText('hidden.txt')).not.toBeInTheDocument()
  })
})
