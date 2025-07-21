<template>
  <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-2" :style="containerStyle">
    <h6
      v-for="(item, index) in items"
      :key="index"
      class="mb-0 d-flex align-items-center"
      :style="{ fontSize }"
    >
      <router-link
        v-if="!!item.action"
        :to="item.action"
        :style="linkStyle"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
      >
        {{ item.title }}
      </router-link>

      <span v-else-if="!item?.translate" :style="{ color: textColor }">{{ item.title }}</span>
      <span v-else :style="{ color: textColor }">{{ item.title }}</span>

      <span v-if="index < items.length - 1" class="material-symbols-outlined" :style="{ fontSize: '20px', marginInline: '12px' }">
        chevron_right
      </span>
    </h6>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  textColor: {
    type: String,
    default: "var(--bs-heading-color)",
  },
  linkColor: {
    type: String,
    default: "var(--bs-heading-color)",
  },
  linkHoverFilter: {
    type: String,
    default: "brightness(80%)",
  },
  fontSize: {
    type: String,
    default: "14px",
  },
  containerStyle: {
    type: Object,
    default: () => ({}),
  },
});

const hovering = ref(false);

const linkStyle = computed(() => ({
  color: props.linkColor,
  textDecoration: "none",
  transition: "1s",
  filter: hovering.value ? props.linkHoverFilter : "none",
}));
</script>

<style lang="scss" scoped>
.highlight-toolbar {
  background-color: var(--bs-tertiary-bg);
  border: solid var(--bs-border-color);
  border-width: 1px 0;
}
</style>
