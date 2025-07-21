import { ref } from 'vue'
import isUrl from '../../src/utils/helpers/isUrl.js'

export default {
  title: 'Functions/helpers/isUrl',
}

export const TesteIsUrl = () => ({
  setup() {
    const input = ref('https://example.com')
    const resultado = ref(isUrl(input.value))

    function testarUrl() {
      resultado.value = isUrl(input.value)
    }

    return { input, resultado, testarUrl }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 500px;">
      <h2>Teste isUrl</h2>

      <div>
        <label>Digite uma URL:</label>
        <input v-model="input" style="width: 100%; margin-bottom: 0.5rem;" />
      </div>

      <button @click="testarUrl" style="margin-bottom: 1rem;">Testar</button>

      <div>
        <strong>Resultado:</strong>
        <div v-if="resultado" style="color: green;">É uma URL válida ✅</div>
        <div v-else style="color: red;">Não é uma URL válida ❌</div>
      </div>
    </div>
  `,
})
