import { ref } from 'vue'
import timestamp from '../../src/utils/formatter/timestampFormatter.js'

export default {
  title: 'Functions/formatter/timestamp',
}

export const TesteTimestamp = () => ({
  setup() {
    const inputDate = ref('2025-07-17T14:30:00')
    const resultado = ref('')

    function formatar() {
      resultado.value = timestamp(inputDate.value)
    }

    formatar()

    return { inputDate, resultado, formatar }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Teste timestamp</h2>

      <label>Data/hora (ISO ou qualquer formato válido):</label>
      <input v-model="inputDate" style="width: 100%; margin-bottom: 1rem;" />

      <button @click="formatar" style="margin-bottom: 1rem;">Formatar</button>

      <div>
        <strong>Resultado formatado:</strong>
        <div>{{ resultado }}</div>
      </div>
    </div>
  `,
})
