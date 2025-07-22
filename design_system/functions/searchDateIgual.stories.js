import { ref, watch } from 'vue';
import searchDateIgual from '@/composables/useSearch/searchDateIgual';

export default {
  title: 'Functions/composables/searchDateIgual',
};

export const TesteSearchDateIgual = () => ({
  setup() {
    const data = ref([
      { id: 1, createdAt: '2023-05-10' },
      { id: 2, createdAt: '2023-06-01' },
      { id: 3, createdAt: '2023-06-01' },
      { id: 4, createdAt: '2023-07-01' },
    ]);

    const column = 'createdAt';
    const term = ref('2023/06/01');
    const searchResult = ref({ error: null, results: [], totalRecords: 0 });

    const runSearch = () => {
      searchResult.value = searchDateIgual(column, data.value, term.value);
        console.log(searchResult.value.results)
        console.log(term.value)

    };

    watch(term, () => {
      runSearch();
    });

    return { term, searchResult, runSearch };
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 600px;">
      <h2>Teste searchDateIgual</h2>
      <p>Buscar por data exata (yyyy/mm/dd):</p>
      <input v-model="term" placeholder="ex: 2023/06/01" style="width: 100%; margin-bottom: 1rem;" />
      <button @click="runSearch" style="margin-bottom: 1rem;">Buscar</button>

      <div v-if="searchResult.error" style="color: red;">
        Erro: {{ searchResult.error }}
      </div>

      <div v-else>
        <p><strong>Total encontrado:</strong> {{ searchResult.totalRecords }}</p>
        <ul>
          <li v-for="item in searchResult.results" :key="item.id">
            ID: {{ item.id }} - Data: {{ item.createdAt }}
          </li>
        </ul>
      </div>
    </div>
  `,
});