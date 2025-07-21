import { ref } from 'vue'
import isEmail from '../../src/utils/helpers/isEmail.js'

export default {
  title: 'Functions/helpers/isEmail',
}

export const TesteIsEmail = () => ({
  setup() {
    const emailInput = ref('exemplo@dominio.com')
    const resultado = ref(isEmail(emailInput.value))

    const validar = () => {
      resultado.value = isEmail(emailInput.value)
    }

    return { emailInput, resultado, validar }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Teste isEmail</h2>

      <input v-model="emailInput" placeholder="Digite um e-mail" style="width: 100%; margin-bottom: 0.5rem;" />

      <button @click="validar" style="margin-bottom: 1rem;">Validar Email</button>

      <div>
        <strong>Resultado:</strong>
        <div v-if="resultado" style="color: green;">E-mail válido ✅</div>
        <div v-else style="color: red;">E-mail inválido ❌</div>
      </div>
    </div>
  `,
})
