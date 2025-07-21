import { render } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'
import AudioPlayer from '@/components/AudioPlayer.vue'

vi.mock('plyr', () => {
  return {
    default: vi.fn().mockImplementation(() => {
      return {
        on: vi.fn(),
        currentTime: 0,
      }
    }),
  }
})

describe('AudioPlayer', () => {
  const src = {
    Id: '123',
    URL: 'http://example.com/audio.mp3',
  }

  it('renderiza o componente com o audio e source corretos', () => {
    const { container } = render(AudioPlayer, {
      props: { src },
    })

    const audio = container.querySelector('audio')
    expect(audio).toBeTruthy()
    expect(audio.id).toBe(`Audio-Player-${src.Id}`)

    const source = audio.querySelector('source')
    expect(source).toBeTruthy()
    expect(source.src).toBe(src.URL)
    expect(source.type).toBe('audio/mpeg')
  })

  it('aplica estilos customizados via props', () => {
    const playerColor = '#123456'
    const controlsBackground = '#abcdef'
    const containerStyle = { width: '50%' }

    const { container } = render(AudioPlayer, {
      props: { src, playerColor, controlsBackground, containerStyle },
    })

    const wrapper = container.firstChild
    expect(wrapper.style.getPropertyValue('--plyr-color-main')).toBe(playerColor)
    expect(wrapper.style.getPropertyValue('--plyr-audio-controls-background')).toBe(controlsBackground)
    expect(wrapper.style.width).toBe('50%')
  })
})
