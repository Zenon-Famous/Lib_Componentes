<template>
  <div
    class="table-box p-3 mb-4"
    :style="{ backgroundColor: tableStyles.backgroundColor || '' }"
  >
    <div v-if="!loading" id="table-scroll" class="table-scroll" :style="{ backgroundColor: tableStyles.scrollBackgroundColor || '' }">
      <table
        :style="{
          textAlign: tableAlign,
          color: tableStyles.textColor || '',
          borderColor: tableStyles.borderColor || '',
          borderCollapse: 'separate',
          borderSpacing: '0',
          width: '100%',
          margin: 'auto'
        }"
      >
        <thead>
          <tr>
            <th
              v-for="(col, index) in columns"
              :key="index"
              scope="col"
              :style="{
                backgroundColor: tableStyles.headerBackgroundColor || '',
                color: tableStyles.headerTextColor || '',
                borderBottom: tableStyles.headerBorderBottom || ''
              }"
            >
              {{ col.title }}
            </th>
            <th
              v-if="actions.length > 0"
              scope="col"
              :style="{
                backgroundColor: tableStyles.headerBackgroundColor || '',
                color: tableStyles.headerTextColor || '',
                borderBottom: tableStyles.headerBorderBottom || ''
              }"
            >
              {{ actionsLabel }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in data"
            :key="index"
            :style="{
              backgroundColor: index % 2 === 0 ? (tableStyles.evenRowBackgroundColor || '') : (tableStyles.oddRowBackgroundColor || ''),
              color: tableStyles.rowTextColor || ''
            }"
          >
            <td
              v-for="(col, colix) in columns"
              :key="colix"
              scope="col"
              role="button"
              @click="callbackItemClick(row)"
              :style="{
                borderColor: tableStyles.borderColor || '',
                borderBottom: tableStyles.rowBorderBottom || ''
              }"
            >
              {{ parseData(row, col) }}
            </td>
            <td
              v-if="actions.length > 0"
              scope="col"
              :style="{
                borderColor: tableStyles.borderColor || '',
                borderBottom: tableStyles.rowBorderBottom || ''
              }"
            >
              <button
                v-for="(action, aindex) in actions"
                :key="aindex"
                class="btn btn-sm"
                :title="action.name"
                @click.stop="action.action(row)"
                :style="{
                  color: action.icon === 'delete' ? (tableStyles.deleteActionColor || 'red') : (tableStyles.actionColor || 'inherit')
                }"
              >
                <span
                  class="material-symbols-outlined"
                >
                  {{ action.icon }}
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <nav v-if="!loading" class="mt-2" :style="{ backgroundColor: tableStyles.paginationBackgroundColor || '' }">
    <ul class="pagination" :style="{ justifyContent: tableStyles.paginationJustifyContent || 'center' }">
      <li class="page-item" :class="{ disabled: actualPage === 1 }">
        <button
          class="page-link"
          aria-label="First"
          :disabled="actualPage === 1"
          @click="changePage(1)"
          :style="{ color: tableStyles.paginationTextColor || '' }"
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      <li
        v-for="index in showPages"
        :key="index"
        class="page-item"
        :class="{ active: actualPage === index }"
      >
        <button
          class="page-link"
          :disabled="actualPage === index"
          @click="changePage(index)"
          :style="{ color: tableStyles.paginationTextColor || '' }"
        >
          {{ index }}
        </button>
      </li>
      <li class="page-item" :class="{ disabled: actualPage === totalPages }">
        <button
          class="page-link"
          aria-label="Last"
          :disabled="actualPage === totalPages"
          @click="changePage(totalPages)"
          :style="{ color: tableStyles.paginationTextColor || '' }"
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>

  <div
    v-if="loading"
    class="loading d-flex justify-content-center align-items-center"
    :style="{ backgroundColor: tableStyles.loadingBackgroundColor || '' }"
  >
    <div class="spinner-border" role="status" :style="{ color: tableStyles.spinnerColor || '' }">
      <span class="visually-hidden">{{ loadingLabel }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataView",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    actualPage: {
      type: Number,
      default: 1,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    actions: {
      type: Array,
      default: () => [],
    },
    actionsLabel: {
      type: String,
      default: "Actions",
    },
    loadingLabel: {
      type: String,
      default: "Loading...",
    },
    tableAlign: {
      type: String,
      default: "center",
      validator: (val) => ["left", "center", "right"].includes(val),
    },

    tableStyles: {
      type: Object,
      default: () => ({
        backgroundColor: "#fff",
        scrollBackgroundColor: "#fff",
        textColor: "#212529",
        borderColor: "#dee2e6",
        headerBackgroundColor: "#f8f9fa",
        headerTextColor: "#212529",
        headerBorderBottom: "2px solid #dee2e6",
        evenRowBackgroundColor: "#fff",
        oddRowBackgroundColor: "#f2f2f2",
        rowTextColor: "#212529",
        rowBorderBottom: "1px solid #dee2e6",
        actionColor: "#0d6efd",
        deleteActionColor: "#dc3545",
        paginationBackgroundColor: "#fff",
        paginationTextColor: "#fffff",
        paginationJustifyContent: "center",
        loadingBackgroundColor: "rgba(255,255,255,0.8)",
        spinnerColor: "#0d6efd",
      }),
    },
  },
  emits: ["changePage", "itemClick"],
  computed: {
    showPages() {
      const pages = [];
      let start = 1;
      let end = 1;
      if (this.totalPages <= 7) {
        start = 1;
        end = this.totalPages;
      } else if (this.actualPage <= 4) {
        start = 1;
        end = 7;
      } else if (this.actualPage >= this.totalPages - 3) {
        start = this.totalPages - 6;
        end = this.totalPages;
      } else {
        start = this.actualPage - 3;
        end = this.actualPage + 3;
      }
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    parseData(row, col) {
      if (typeof col.eval === "function") {
        return col.eval(row);
      } else {
        return row[col.field];
      }
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
    callbackItemClick(item) {
      this.$emit("itemClick", item);
    },
  },
};
</script>

<style scoped>
.spinner-border {
  width: 5rem;
  height: 5rem;
}
.table-scroll {
  position: relative;
  width: 100%;
  overflow-y: auto;
}
.table-box {
  display: flex;
  height: 65vh;
  width: 100%;
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vh;
}
</style>
