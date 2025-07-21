<template>
  <div
    class="paginator-component d-flex align-items-center"
    :style="{ justifyContent: justifyContentMap[justifyContent] || 'center' }"
  >
    <button
      :class="['btn', { small: size == 'sm' }]"
      :disabled="currentPage == 1"
      :style="buttonStyle"
      @click="prev"
    >
      <icon-component
        icon-name="chevron_left"
        :size="size == 'sm' ? 20 : 28"
        classes="icon pt-1"
      />
    </button>

    <template v-if="!pages.includes(1)">
      <button
        :class="['btn', { small: size == 'sm' }]"
        :style="buttonStyle"
        @click="goToPage(1)"
      >
        1
      </button>
      <div>...</div>
    </template>

    <button
      v-for="page in pages.slice(0, 4)"
      :key="page"
      :class="['btn', { small: size == 'sm', 'btn-primary': currentPage == page }]"
      :style="currentPage === page ? activeButtonStyle : buttonStyle"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <template v-if="!pages.includes(totalPages)">
      <div>...</div>
      <button
        :class="['btn', { small: size == 'sm' }]"
        :style="buttonStyle"
        @click="goToPage(totalPages)"
      >
        {{ totalPages }}
      </button>
    </template>

    <button
      :class="['btn', { small: size == 'sm' }]"
      :disabled="currentPage == totalPages"
      class="d-flex align-items-center"
      :style="buttonStyle"
      @click="next"
    >
      <icon-component
        icon-name="chevron_right"
        :size="size == 'sm' ? 20 : 28"
        classes="icon pt-1"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  totalPages: {
    type: Number,
    default: 1,
  },
  value: {
    type: [Number, String],
    default: 1,
  },
  size: {
    type: String,
    default: "lg",
  },
  color: {
    type: String,
    default: "#00bfff",
  },
  activeColor: {
    type: String,
    default: "#fff",
  },
  disabledColor: {
    type: String,
    default: "red",
  },
  justifyContent: {
    type: String,
    default: "center", 
    validator: (val) => ["left", "center", "right"].includes(val),
  },
});

const emitOptions = defineEmits(["page"]);

const currentPage = ref(Number(props.value));

const pages = computed(() => {
  const arr = [];
  for (let page = currentPage.value - 2; page <= currentPage.value + 2; page++) {
    if (page > 0 && page <= props.totalPages) arr.push(page);
  }
  return arr;
});

const justifyContentMap = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

function goToPage(page) {
  currentPage.value = page;
  emitOptions("page", currentPage.value);
}
function next() {
  if (currentPage.value < props.totalPages) {
    currentPage.value++;
    emitOptions("page", currentPage.value);
  }
}
function prev() {
  if (currentPage.value > 1) {
    currentPage.value--;
    emitOptions("page", currentPage.value);
  }
}

// Estilos dinâmicos para botões
const buttonStyle = computed(() => ({
  color: props.color,
  border: "none",
}));

const activeButtonStyle = computed(() => ({
  color: props.activeColor,
  backgroundColor: props.color,
  border: "none",
}));

</script>

<style scoped>
.paginator-component {
  .btn {
    &:disabled {
      color: var(--gray);
      border: none;
      cursor: not-allowed;
    }
    &.small {
      padding: 4px 8px;
      font-size: 14px !important;
    }
  }
}
</style>
