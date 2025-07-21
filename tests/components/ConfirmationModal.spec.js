import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import ConfirmationModal from '@/components/ConfirmationModal.vue'

const globalComponents = {
  'icon-component': {
    template: '<svg role="img" />', 
  },
}

describe('ConfirmationModal', () => {
  it('renderiza título, descrição e botões', () => {
    const { getByText } = render(ConfirmationModal, {
      props: {
        title: 'Deletar registro?',
        description: 'Confirma a exclusão do registro?',
        cancelLabel: 'Cancelar',
        confirmLabel: 'Confirmar',
      },
      global: { components: globalComponents },
    })

    expect(getByText('Deletar registro?')).toBeTruthy()
    expect(getByText('Confirma a exclusão do registro?')).toBeTruthy()
    expect(getByText('Cancelar')).toBeTruthy()
    expect(getByText('Confirmar')).toBeTruthy()
  })

  it('emite eventos cancel e confirm ao clicar nos botões', async () => {
    const { getByText, emitted } = render(ConfirmationModal, {
      global: { components: globalComponents },
    })

    await fireEvent.click(getByText('Close'))
    expect(emitted()).toHaveProperty('cancel')

    await fireEvent.click(getByText('Confirm'))
    expect(emitted()).toHaveProperty('confirm')
  })

  it('exibe o ícone quando a prop icon é passada', () => {
    const { getByRole } = render(ConfirmationModal, {
      props: { icon: 'trash' },
      global: { components: globalComponents },
    })

    expect(getByRole('img')).toBeTruthy()
  })
})
