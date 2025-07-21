<template>
  <div
    class="checkbox-component d-flex align-items-center justify-content-center me-2"
    :style="[
      `border: 1px solid ${color};`,
      isActive ? `background-color:${color}` : '',
    ]"
  >
    <i v-show="isActive" class="icon-check"></i>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#000",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.checkbox-component {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  i {
    font-size: 18px;
    color: #fff;
  }
}
</style>
