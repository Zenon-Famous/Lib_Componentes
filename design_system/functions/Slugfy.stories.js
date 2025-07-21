import { ref } from 'vue'
import Slugfy from '../../src/utils/helpers/Slugfy'

export default {
  title: 'Functions/helpers/Slugfy',
}

export const ExemploSlugfy = () => ({
  setup() {
    const inputText = ref('Olá Mundo! Isso é um título.')
    const slugResult = ref(Slugfy(inputText.value))

    function updateSlug() {
      slugResult.value = Slugfy(inputText.value)
    }

    return { inputText, slugResult, updateSlug }
  },
  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Testando Slugfy</h2>
      <label>Texto original:</label>
      <input v-model="inputText" @input="updateSlug" style="width: 100%; margin-bottom: 1rem;" />

      <p><strong>Slug gerado:</strong> {{ slugResult }}</p>
    </div>
  `,
})
