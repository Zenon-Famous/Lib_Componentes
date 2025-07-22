import { ref, watch } from 'vue';
import searchContains from '@/composables/useSearch/searchContains'; 

export default {
  title: 'Functions/composables/searchContains',
};

export const TesteSearchContains = () => ({
  setup() {
    const data = ref([
      { id: 1, name: 'João Silva' },
      { id: 2, name: 'Maria Souza' },
      { id: 3, name: 'Ana Clara' },
      { id: 4, name: 'Pedro Santos' },
    ]);

    const column = 'name';
    const term = ref('');
    const searchResult = ref({ error: null, results: [], totalRecords: 0 });

    const runSearch = () => {
      searchResult.value = searchContains(column, data.value, term.value);
    };

    watch(term, () => {
      runSearch();
    });

    // Rodar a busca inicial
    runSearch();

    return { term, searchResult, runSearch };
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 600px;">
      <h2>Teste searchContains</h2>
      <p>Buscar por termo no campo "name":</p>
      <input v-model="term" placeholder="Digite o termo" style="width: 100%; margin-bottom: 1rem;" />
      <button @click="runSearch" style="margin-bottom: 1rem;">Buscar</button>

      <div v-if="searchResult.error" style="color: red;">
        Erro: {{ searchResult.error }}
      </div>

      <div v-else>
        <p><strong>Total encontrado:</strong> {{ searchResult.totalRecords }}</p>
        <ul>
          <li v-for="item in searchResult.results" :key="item.id">
            ID: {{ item.id }} - Nome: {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  `,
});
