import { ref } from 'vue'
import validateForm from '../../src/utils/helpers/validateForm.js'

export default {
  title: 'Functions/helpers/validateForm',
}

export const TesteValidateForm = () => ({
  setup() {
    const fields = ['email', 'nome', 'telefone']

    const testData = ref({
      email: 'teste@dominio.com',
      nome: 'João Silva',
      telefone: '123456789',
    })

    const validationResult = ref(null)

    function runValidation() {
      validationResult.value = validateForm(fields, testData.value)
    }

    runValidation()

    return { testData, validationResult, runValidation }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Teste validateForm</h2>
      <div>
        <label>Email:</label>
        <input v-model="testData.email" style="width: 100%; margin-bottom: 0.5rem;" />
      </div>
      <div>
        <label>Nome:</label>
        <input v-model="testData.nome" style="width: 100%; margin-bottom: 0.5rem;" />
      </div>
      <div>
        <label>Telefone:</label>
        <input v-model="testData.telefone" style="width: 100%; margin-bottom: 0.5rem;" />
      </div>

      <button @click="runValidation" style="margin-bottom: 1rem;">Validar</button>

      <div>
        <strong>Resultado da validação:</strong>
        <div v-if="validationResult === null" style="color: green;">Formulário válido!</div>
        <div v-else style="color: red;">Campo inválido: {{ validationResult }}</div>
      </div>
    </div>
  `,
})
