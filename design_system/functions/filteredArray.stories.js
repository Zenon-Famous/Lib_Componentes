import { ref } from 'vue'
import filteredArray from '../../src/utils/helpers/filteredArray.js'

export default {
  title: 'Functions/helpers/filteredArray',
}

export const TesteFilteredArray = () => ({
  setup() {
    const listaOriginal = ref([
      { id: 1, nome: 'Item 1' },
      { id: 2, nome: 'Item 2' },
      { id: 3, nome: 'Item 3' },
    ])

    const itemParaRemover = ref({ id: 2, nome: 'Item 2' })
    const resultado = ref([])

    const remover = () => {
      resultado.value = filteredArray(listaOriginal.value, itemParaRemover.value)
    }

    remover()

    return { listaOriginal, itemParaRemover, resultado, remover }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem;">
      <h2>Teste filteredArray</h2>

      <p><strong>Item a remover (id):</strong> {{ itemParaRemover.id }}</p>

      <button @click="remover" style="margin-bottom: 1rem;">Remover Item</button>

      <div>
        <strong>Lista Original:</strong>
        <ul>
          <li v-for="item in listaOriginal" :key="item.id">{{ item.nome }} (id: {{ item.id }})</li>
        </ul>

        <strong>Lista Filtrada:</strong>
        <ul>
          <li v-for="item in resultado" :key="item.id">{{ item.nome }} (id: {{ item.id }})</li>
        </ul>
      </div>
    </div>
  `,
})
