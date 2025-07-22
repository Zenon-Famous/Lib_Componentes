import { ref } from 'vue'
import revertSlugfy from '@/utils/helpers/revertSlugfy'

export default {
  title: 'Functions/helpers/revertSlugfy',
}

export const ExemploRevertSlugfy = () => ({
  setup() {
    const slugText = ref('ola-mundo-isso-e-um-titulo')
    const revertedText = ref(revertSlugfy(slugText.value))

    function updateReverted() {
      revertedText.value = revertSlugfy(slugText.value)
    }

    return { slugText, revertedText, updateReverted }
  },
  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Testando revertSlugfy</h2>
      <label>Slug:</label>
      <input v-model="slugText" @input="updateReverted" style="width: 100%; margin-bottom: 1rem;" />

      <p><strong>Texto revertido:</strong> {{ revertedText }}</p>
    </div>
  `,
})
