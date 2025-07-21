import { ref } from 'vue';
import month3year4 from '../../src/utils/formatter/monthYearFormatter.js';

export default {
  title: 'Functions/formatter/month3year4',
};

export const TesteMonth3Year4 = () => ({
  setup() {
    const inputDate = ref('2024-07-17T00:00:00Z');
    const resultado = ref('');

    function formatar() {
      resultado.value = month3year4(inputDate.value);
    }

    formatar();

    return { inputDate, resultado, formatar };
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 400px;">
      <h2>Teste de month3year4</h2>

      <label>Data (ISO string ou similar):</label>
      <input v-model="inputDate" style="width: 100%; margin-bottom: 1rem;" />

      <button @click="formatar" style="margin-bottom: 1rem;">Formatar</button>

      <div>
        <strong>Resultado formatado:</strong>
        <div>{{ resultado }}</div>
      </div>
    </div>
  `,
});
