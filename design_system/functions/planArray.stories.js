import { ref } from 'vue'
import planArray from '@/utils/helpers/planArray.js'

export default {
  title: 'Functions/helpers/planArray',
}

export const TestePlanArray = () => ({
  setup() {
    const inputArray = ref(['Olá', 'mundo', 'Storybook'])
    const resultado = ref(planArray(inputArray.value))

    function updateOutput() {
      resultado.value = planArray(inputArray.value)
    }

    return { inputArray, resultado, updateOutput }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 500px;">
      <h2>Teste planArray</h2>

      <div>
        <label>Array (editar diretamente no código para simular):</label>
        <pre>{{ inputArray }}</pre>
      </div>

      <button @click="updateOutput" style="margin: 1rem 0;">Atualizar resultado</button>

      <div>
        <strong>Resultado:</strong>
        <div style="margin-top: 0.5rem; font-weight: bold;">{{ resultado }}</div>
      </div>
    </div>
  `,
})
