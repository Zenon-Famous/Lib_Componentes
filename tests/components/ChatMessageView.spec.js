import { render } from '@testing-library/vue'
import ChatMessage from '@/components/ChatMessageView.vue'
import { describe, it, expect, vi } from 'vitest'
import { markRaw } from 'vue'

vi.mock('../../src/components/AudioPlayer.vue', () => ({
  default: {
    template: '<div data-testid="mock-audio-player"></div>',
  },
}))

const baseMessage = {
  Direction: 'Inbound',
  Participant: { NickName: 'User1' },
  ReceivedTime: new Date().toISOString(),
  Type: 'Text',
  Message: 'Hello world',
}

describe('ChatMessage', () => {
  it('renderiza mensagem de texto e nome do cliente', () => {
    const { getByText } = render(ChatMessage, {
      props: { message: baseMessage },
    })

    expect(getByText('User1')).toBeTruthy()
    expect(getByText('Hello world')).toBeTruthy()
  })

  it('aplica estilo do cliente quando message.Direction é Inbound', () => {
    const { container } = render(ChatMessage, {
      props: { message: baseMessage },
    })
    const balloon = container.querySelector('.chat-balloon')
    expect(balloon).toHaveStyle('background-color: #d2d6de')
  })

  it('aplica estilo do agente quando message.Direction é Outbound', () => {
    const agentMsg = { ...baseMessage, Direction: 'Outbound' }
    const { container } = render(ChatMessage, {
      props: { message: agentMsg },
    })
    const balloon = container.querySelector('.chat-balloon')
    expect(balloon).toHaveStyle('background-color: green')
  })

  it('renderiza componente accountCircleIcon quando fornecido', () => {
    const DummyIcon = markRaw({
      template: '<svg role="img"></svg>',
    })
    const { getByRole } = render(ChatMessage, {
      props: {
        message: baseMessage,
        accountCircleIcon: DummyIcon,
      },
    })
    expect(getByRole('img')).toBeTruthy()
  })

  it('renderiza mensagem de anexo do tipo imagem', () => {
    const msg = {
      ...baseMessage,
      Type: 'Attachment',
      MimeType: 'image/png',
      URL: 'http://example.com/image.png',
    }
    const { getByRole } = render(ChatMessage, { props: { message: msg } })

    const img = getByRole('img')
    expect(img).toHaveAttribute('src', 'http://example.com/image.png')
  })

  it('renderiza áudio e link de download para anexo áudio', () => {
    const msg = {
      ...baseMessage,
      Type: 'Attachment',
      MimeType: 'audio/mpeg',
      URL: 'http://example.com/audio.mp3',
      MediaType: 'Audio',
    }
    const { getByText, getByTestId } = render(ChatMessage, {
      props: { message: msg },
    })

    expect(getByText('Download')).toBeTruthy()
    expect(getByTestId('mock-audio-player')).toBeTruthy()
  })

  it('formata timestamp corretamente', () => {
    const isoDate = '2025-07-21T14:30:00Z'
    const { getByText } = render(ChatMessage, {
      props: {
        message: { ...baseMessage, ReceivedTime: isoDate },
      },
    })
    const date = new Date(isoDate)
    const expectedTime = date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    expect(getByText(expectedTime)).toBeTruthy()
  })

  it('aplica formatação customizada via timestampFormatter', () => {
    const formatter = () => 'CUSTOM TIME'
    const { getByText } = render(ChatMessage, {
      props: {
        message: baseMessage,
        timestampFormatter: formatter,
      },
    })
    expect(getByText('CUSTOM TIME')).toBeTruthy()
  })

  it('handleText aplica as formatações corretamente', () => {
    const messageText = '*bold* _italic_ ~strike~ `code` > quote - list'

    const { container, getByText } = render(ChatMessage, {
      props: {
        message: {
          ...baseMessage,
          Message: messageText,
          Type: 'Text',
        },
      },
    })

    const bold = getByText('bold')
    expect(bold.tagName).toBe('B')

    const italic = getByText('italic')
    expect(italic.tagName).toBe('I')

    const strike = getByText('strike')
    expect(strike.style.textDecoration).toContain('line-through')

    const code = getByText('code')
    expect(code.style.fontFamily).toMatch(/Courier/)

    expect(container.innerHTML).toContain('border-left')

    const listItem = getByText('list')
    expect(listItem.tagName).toBe('LI')
  })
})
