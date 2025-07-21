import { ref } from 'vue'
import isOnArray from '../../src/utils/helpers/isOnArray.js'

export default {
  title: 'Functions/helpers/isOnArray',
}

export const TesteIsOnArray = () => ({
  setup() {
    const array = ref([
      { id: 1, nome: 'João' },
      { id: 2, nome: 'Maria' },
    ])

    const novoItem = ref({ id: 2, nome: 'Maria' })
    const campoComparacao = ref('id')
    const resultado = ref(isOnArray(array.value, campoComparacao.value, novoItem.value))

    const testar = () => {
      resultado.value = isOnArray(array.value, campoComparacao.value, novoItem.value)
    }

    return { array, novoItem, campoComparacao, resultado, testar }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 600px;">
      <h2>Teste isOnArray</h2>

      <p><strong>Array atual:</strong> {{ array }}</p>
      <p><strong>Item para verificar:</strong> {{ novoItem }}</p>
      <p><strong>Campo usado para comparação:</strong> {{ campoComparacao }}</p>

      <button @click="testar" style="margin: 1rem 0;">Testar</button>

      <div>
        <strong>Resultado:</strong>
        <span v-if="resultado" style="color: green;">Item está no array ✅</span>
        <span v-else style="color: red;">Item não está no array ❌</span>
      </div>
    </div>
  `,
})
