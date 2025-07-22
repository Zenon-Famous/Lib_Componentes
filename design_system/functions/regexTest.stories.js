import { ref, defineComponent } from 'vue'
import regexTest from '@/utils/helpers/regexTest.js'

export default {
  title: 'Functions/helpers/regexTest',
}

export const TesteRegexTest = () => defineComponent({
  setup() {
    const regexInput = ref('^[a-z0-9]+$')
    const fieldInput = ref('teste123')
    const resultado = ref(null)

    function runTest() {
      try {
        const reg = new RegExp(regexInput.value)
        resultado.value = regexTest(reg, fieldInput.value)
      } catch (error) {
        resultado.value = `Regex inválido: ${error.message}`
      }
    }

    runTest()

    return { regexInput, fieldInput, resultado, runTest }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Teste regexTest</h2>

      <div>
        <label>Regex:</label>
        <input v-model="regexInput" style="width: 100%; margin-bottom: 0.5rem;" />
      </div>

      <div>
        <label>Texto para testar:</label>
        <input v-model="fieldInput" style="width: 100%; margin-bottom: 0.5rem;" />
      </div>

      <button @click="runTest" style="margin-bottom: 1rem;">Testar Regex</button>

      <div>
        <strong>Resultado:</strong>
        <div v-if="typeof resultado === 'boolean'">{{ resultado ? 'Passou no teste' : 'Não passou no teste' }}</div>
        <div v-else style="color: red;">{{ resultado }}</div>
      </div>
    </div>
  `,
})
