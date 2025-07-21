import { reactive } from 'vue'
import formFields from '../../src/utils/helpers/formFields.js'

export default {
  title: 'Functions/helpers/formFields',
}

export const TesteFormFields = () => ({
  setup() {
    const fieldNames = ['nome', 'email', 'telefone']
    const initialData = {
      nome: 'João',
      email: 'joao@email.com',
    }

    const resultado = reactive(formFields(fieldNames, initialData))

    return { resultado }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Teste formFields</h2>

      <div v-for="(value, key) in resultado.form" :key="key" style="margin-bottom: 1rem;">
        <label :for="key">{{ key }}:</label>
        <input :id="key" v-model="resultado.form[key]" style="width: 100%;" />
        <div v-if="resultado.errors[key]" style="color: red;">Erro em {{ key }}</div>
      </div>

      <div>
        <strong>Loading:</strong> {{ resultado.loading }}
      </div>

      <pre style="background: #f0f0f0; padding: 1rem; margin-top: 1rem;">
{{ JSON.stringify(resultado, null, 2) }}
      </pre>
    </div>
  `,
})
