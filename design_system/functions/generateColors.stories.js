import { ref, watch } from 'vue'
import generateColors from '../../src/utils/helpers/generateColors.js'

export default {
  title: 'Functions/helpers/generateColors',
}

export const TesteGenerateColors = () => ({
  setup() {
    const inputArray = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
    const theme = ref('darks')
    const resultado = ref([])

    const customDarkTheme = [
      '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777'
    ]

    const customWhiteTheme = [
      '#eeeeee', '#dddddd', '#cccccc', '#bbbbbb', '#aaaaaa', '#999999', '#888888'
    ]

    const gerar = () => {
      resultado.value = generateColors(
        inputArray.value,
        theme.value,
        customDarkTheme,
        customWhiteTheme
      )
    }

    watch(theme, gerar)

    gerar()

    return { inputArray, theme, resultado, gerar }
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem;">
      <h2>Teste generateColors</h2>

      <label>Escolha o tema:</label>
      <select v-model="theme" style="margin-bottom: 1rem;">
        <option value="darks">Darks</option>
        <option value="autos">Autos</option>
        <option value="white">White</option>
      </select>

      <div>
        <strong>Resultado:</strong>
        <ul>
          <li v-for="(color, index) in resultado" :key="index" :style="{ color }">
            Cor {{ index + 1 }}: {{ color }}
          </li>
        </ul>
      </div>
    </div>
  `,
})
