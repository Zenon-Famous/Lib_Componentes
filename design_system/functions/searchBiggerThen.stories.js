import { ref, watch } from 'vue';
import searchBiggerThen from '@/composables/useSearch/searchBiggerThen.js'; 

export default {
  title: 'Functions/composables/searchBiggerThen',
};

export const TesteSearchBiggerThen = () => ({
  setup() {
    const data = ref([
      { id: 1, createdAt: '2023-05-10' },
      { id: 2, createdAt: '2023-06-15' },
      { id: 3, createdAt: '2023-07-01' },
      { id: 4, createdAt: '2023-04-20' },
    ]);

    const column = 'createdAt';
    const term = ref('2023/06/01');
    const searchResult = ref({ error: null, results: [], totalRecords: 0 });

    const runSearch = () => {
      searchResult.value = searchBiggerThen(column, data.value, term.value);
    };

    watch(term, () => {
      runSearch();
    });

    // Busca inicial
    runSearch();

    return { term, searchResult, runSearch };
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 600px;">
      <h2>Teste searchBiggerThen</h2>
      <p>Buscar por datas maiores que (yyyy/mm/dd):</p>
      <input v-model="term" placeholder="ex: 2023/06/01" style="width: 100%; margin-bottom: 1rem;" />
      <button @click="runSearch" style="margin-bottom: 1rem;">Filtrar</button>

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
