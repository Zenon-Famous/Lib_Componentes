<template>
  <div
    class="tabs-component d-flex"
    :class="orientationClass"
  >
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="btn-tabs mb-2 py-2"
      :class="{ active: activeTab === tab }"
      @click="emitOptions('changeTab', tab)"
      :style="buttonStyle(tab === activeTab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
  activeTab: {
    type: String,
    default: "",
  },
  orientation: {
    type: String,
    default: "horizontal", 
    validator: (val) => ["horizontal", "vertical"].includes(val),
  },
  tabColor: {
    type: String,
    default: "var(--profile-tabs-color)",
  },
  activeTabColor: {
    type: String,
    default: "var(--profile-tabs-color-active)",
  },
  borderColor: {
    type: String,
    default: "var(--profile-tabs-border-color)",
  },
  activeBorderColor: {
    type: String,
    default: "var(--profile-tabs-color-active)",
  },
});

const emitOptions = defineEmits(["changeTab"]);

const orientationClass = computed(() =>
  props.orientation === "horizontal"
    ? "flex-row"
    : "flex-md-column"
);

const buttonStyle = (isActive) => ({
  color: isActive ? props.activeTabColor : props.tabColor,
  borderRight:
    !isActive && props.orientation === "vertical"
      ? `3px solid ${props.borderColor}`
      : isActive && props.orientation === "vertical"
      ? `3px solid ${props.activeBorderColor}`
      : "none",
  borderBottom:
    !isActive && props.orientation === "horizontal"
      ? `3px solid ${props.borderColor}`
      : isActive && props.orientation === "horizontal"
      ? `3px solid ${props.activeBorderColor}`
      : "none",
  flex: props.orientation === "horizontal" ? "1" : "unset",
  width: props.orientation === "vertical" ? "100%" : "auto",
});
</script>

<style scoped lang="scss">
.tabs-component {
  .btn-tabs {
    border: none;
    background: transparent;
    font-size: 14px;
    font-weight: 500;
    line-height: 19.6px;
    transition: all 0.3s ease;
    margin-bottom: 0.5rem;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }
}
</style>
