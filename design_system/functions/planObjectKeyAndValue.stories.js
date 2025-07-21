import { ref } from 'vue';
import planObjectKeyAndValue from '../../src/utils/helpers/planObjectKeyAndValue.js';

export default {
  title: 'Functions/helpers/planObjectKeyAndValue',
};

export const TestePlanObjectKeyAndValue = () => ({
  setup() {
    const inputObject = ref({
      nome: 'João',
      idade: 30,
      cidade: 'São Paulo',
    });

    const resultado = ref('');

    function runConversion() {
      resultado.value = planObjectKeyAndValue(inputObject.value);
    }

    // Rodar inicialmente
    runConversion();

    return { inputObject, resultado, runConversion };
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Teste planObjectKeyAndValue</h2>
      
      <label>Objeto (JSON):</label>
      <textarea 
        v-model="inputObject"
        style="width: 100%; height: 100px; margin-bottom: 1rem;"
        @input="runConversion"
      ></textarea>

      <div>
        <strong>Resultado:</strong>
        <p>{{ resultado }}</p>
      </div>
    </div>
  `,

 
  watch: {
    inputObject: {
      handler(val) {
        try {
          if (typeof val === 'string') {
            this.inputObject = JSON.parse(val);
          }
        } catch {
        }
      },
      deep: true,
    },
  },
});
