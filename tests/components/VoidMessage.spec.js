import { render, screen, fireEvent } from '@testing-library/vue'
import VoidMessage from '@/components/VoidMessage.vue'


describe('VoidMessage.vue', () => {
  it('exibe a mensagem de erro quando isError = true', () => {
    render(VoidMessage, {
      props: {
        isError: true
      }
    })

    expect(screen.getByText(/There was an error/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
  })

  it('emite evento quando o botão é clicado', async () => {
    const { emitted } = render(VoidMessage, {
      props: {
        isError: true
      }
    })

    const button = screen.getByRole('button', { name: /try again/i })
    await fireEvent.click(button)

    expect(emitted().action).toBeTruthy()
  })

  it('exibe mensagem personalizada quando `message` é passada', () => {
    render(VoidMessage, {
      props: {
        message: 'Nenhum cliente encontrado.'
      }
    })

    expect(screen.getByText('Nenhum cliente encontrado.')).toBeInTheDocument()
  })

  it('exibe mensagem de busca quando `haveSearchTerm` é true', () => {
    render(VoidMessage, {
      props: {
        haveSearchTerm: true,
        querySearch: 'joão',
        noResultsText: 'Nenhum resultado para'
      }
    })

    expect(screen.getByText(/Nenhum resultado para/i)).toBeInTheDocument()
    expect(screen.getByText(/joão/i)).toBeInTheDocument()
  })

  it('aplica estilos personalizados no texto', () => {
    render(VoidMessage, {
      props: {
        textColor: 'red',
        textFontSize: '20px',
        message: 'Mensagem de teste'
      }
    })

    const el = screen.getByText('Mensagem de teste')
    expect(el).toHaveStyle({ color: 'red' })
  })
})
