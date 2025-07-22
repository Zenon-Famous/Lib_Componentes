import { ref, watch } from 'vue';
import searchIguals from '@/composables/useSearch/searchIguals';

export default {
  title: 'Functions/composables/searchIguals',
};

export const TesteSearchIguals = () => ({
  setup() {
    // Dados simulados
    const data = ref([
      { id: 1, category: 'fruta', name: 'maçã' },
      { id: 2, category: 'legume', name: 'cenoura' },
      { id: 3, category: 'fruta', name: 'banana' },
      { id: 4, category: 'fruta', name: 'laranja' },
    ]);

    const column = 'category';
    const term = ref('fruta');
    const searchResult = ref({ error: null, results: [], totalRecords: 0 });

    function runSearch() {
      searchResult.value = searchIguals(column, data.value, term.value);
    }

    watch(term, () => {
      runSearch();
    });

    runSearch();
    

    return { term, searchResult, runSearch };
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem; max-width: 600px;">
      <h2>Teste searchIguals</h2>
      <p>Buscar itens por categoria (ex: fruta, legume):</p>
      <input v-model="term" placeholder="ex: fruta" style="width: 100%; margin-bottom: 1rem;" />
      <button @click="runSearch" style="margin-bottom: 1rem;">Buscar</button>

      <div v-if="searchResult.error" style="color: red;">
        Erro: {{ searchResult.error }}
      </div>

      <div v-else>
        <p><strong>Total encontrado:</strong> {{ searchResult.totalRecords }}</p>
        <ul>
          <li v-for="item in searchResult.results" :key="item.id">
            ID: {{ item.id }} - Categoria: {{ item.category }} - Nome: {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  `,
});
