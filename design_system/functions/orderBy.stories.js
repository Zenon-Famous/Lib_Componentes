import { ref } from 'vue'
import orderBy from '../../src/utils/helpers/orderBy.js'

export default {
  title: 'Functions/helpers/orderBy',
}

export const TesteOrderBy = () => ({
  setup() {
    const dados = ref([
      { id: 1, StartTime: '2025-07-17T10:00:00' },
      { id: 2, StartTime: '2025-07-17T08:00:00' },
      { id: 3, StartTime: '2025-07-17T09:00:00' },
    ])

    const ordemDecrescente = ref(true)
    const resultado = ref(orderBy([...dados.value], ordemDecrescente.value))

    function inverterOrdem() {
      ordemDecrescente.value = !ordemDecrescente.value
      resultado.value = orderBy([...dados.value], ordemDecrescente.value)
    }

    return { dados, resultado, inverterOrdem, ordemDecrescente }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 600px;">
      <h2>Teste orderBy</h2>

      <p>Ordenar por: <strong>{{ ordemDecrescente ? 'Decrescente' : 'Crescente' }}</strong></p>
      <button @click="inverterOrdem" style="margin-bottom: 1rem;">Inverter ordem</button>

      <ul>
        <li v-for="item in resultado" :key="item.id">
          ID: {{ item.id }} - StartTime: {{ item.StartTime }}
        </li>
      </ul>
    </div>
  `,
})
