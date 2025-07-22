import { ref, onMounted, onUnmounted } from 'vue'
import ConversationTime from '@/utils/timeFormatter/ConversationTime.js'

export default {
  title: 'Functions/TimeFormatter/ConversationTime',
}

export const TempoDecorridoComTimer = () => ({
  setup() {
    const startTime = new Date()
    const elapsedTime = ref('00:00')

    let interval = null

    onMounted(() => {
      interval = setInterval(() => {
        elapsedTime.value = ConversationTime(startTime)
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(interval)
    })

    return { elapsedTime }
  },
  template: `
    <div style="font-family: sans-serif; font-size: 18px; padding: 1rem;">
      Tempo decorrido desde o início: <strong>{{ elapsedTime }}</strong>
    </div>
  `,
})
