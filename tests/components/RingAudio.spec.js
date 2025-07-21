import { render } from '@testing-library/vue'
import { vi } from 'vitest'
import RingAudio from '@/components/RingAudio.vue'

test('audio está no DOM com src e type corretos e play é chamado', async () => {
  const playMock = vi.fn(() => Promise.resolve())
  window.HTMLMediaElement.prototype.play = playMock

  const srcUrl = 'https://example.com/audio.mp3'
  const audioType = 'audio/mpeg'

  const { container } = render(RingAudio, {
    props: { srcUrl, audioType }
  })

  const audio = container.querySelector('audio')
  expect(audio).toBeTruthy()

  const source = audio.querySelector('source')
  expect(source).toHaveAttribute('src', srcUrl)
  expect(source).toHaveAttribute('type', audioType)

  expect(playMock).toHaveBeenCalled()
})
