import { render, fireEvent } from '@testing-library/vue'
import AutoResizeTextArea from '@/components/AutoResizeTextArea.vue'
import { describe, it, expect } from 'vitest'

describe('AutoResizeTextArea', () => {
  const baseProps = {
    modelValue: 'initial text',
    id: 'test-textarea',
  }

  it('renderiza label, textarea e placeholder corretamente', () => {
    const { getByLabelText } = render(AutoResizeTextArea, {
      props: {
        ...baseProps,
        label: 'My Label',
        placeholder: 'Type here...'
      },
    })

    const textarea = getByLabelText('My Label')
    expect(textarea).toBeTruthy()
    expect(textarea.placeholder).toBe('Type here...')
  })

  it('exibe mensagem de erro quando errors é true', () => {
    const { getByText } = render(AutoResizeTextArea, {
      props: {
        ...baseProps,
        errors: true,
        RequiredLabel: 'Campo obrigatório',
      },
    })

    expect(getByText('Campo obrigatório*')).toBeTruthy()
  })

  it('emite update:modelValue ao digitar', async () => {
    const { getByRole, emitted } = render(AutoResizeTextArea, {
      props: baseProps,
    })

    const textarea = getByRole('textbox')
    await fireEvent.update(textarea, 'novo texto')

    expect(emitted()['update:modelValue']).toBeTruthy()
    expect(emitted()['update:modelValue'][0]).toEqual(['novo texto'])
  })

  it('ajusta o número de linhas conforme o conteúdo', async () => {
    const { getByRole } = render(AutoResizeTextArea, {
      props: baseProps,
    })

    const textarea = getByRole('textbox')

    await fireEvent.update(textarea, 'linha1\nlinha2\nlinha3\nlinha4\nlinha5\nlinha6\nlinha7')

    textarea.dispatchEvent(new Event('input'))

    const rowsNumber = Number(textarea.rows)

    expect(rowsNumber).toBeGreaterThanOrEqual(3)
    expect(rowsNumber).toBeLessThanOrEqual(8)
  })

  it('não exibe label quando não fornecido', () => {
    const { queryByLabelText } = render(AutoResizeTextArea, {
      props: {
        modelValue: '',
        id: 'no-label',
      },
    })

    expect(queryByLabelText(/.*/)).toBeNull()
  })

  it('desativa textarea quando disabled é true', () => {
    const { getByRole } = render(AutoResizeTextArea, {
      props: {
        ...baseProps,
        disabled: true,
      },
    })

    const textarea = getByRole('textbox')
    expect(textarea).toBeDisabled()
  })
})
