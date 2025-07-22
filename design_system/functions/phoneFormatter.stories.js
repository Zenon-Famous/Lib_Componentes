import { ref } from 'vue'
import phone from '@/utils/formatter/phoneFormatter.js'

export default {
  title: 'Functions/formatter/phone',
}

export const TestePhoneFormatter = () => ({
  setup() {
    const inputPhone = ref('+5511987654321')
    const resultado = ref('')

    function formatar() {
      resultado.value = phone(inputPhone.value)
    }

    formatar()

    return { inputPhone, resultado, formatar }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Teste formatação de telefone</h2>

      <label>Telefone (formato +55DDDNNNNNNNN):</label>
      <input v-model="inputPhone" style="width: 100%; margin-bottom: 1rem;" />

      <button @click="formatar" style="margin-bottom: 1rem;">Formatar</button>

      <div>
        <strong>Telefone formatado:</strong>
        <div>{{ resultado }}</div>
      </div>
    </div>
  `,
})
