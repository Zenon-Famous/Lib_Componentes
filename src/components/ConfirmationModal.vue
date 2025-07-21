<template>
  <div
    class="confirmation-modal-component"
    :style="{
      color: textColor,
      fontFamily: fontFamily,
      fontSize: fontSize + 'px'
    }"
  >
    <h4 class="text-center">{{ title }}</h4>
    <hr />
    <div v-if="icon.length" class="d-flex justify-content-center">
      <icon-component :class="iconColorClass" :icon-name="icon" :size="48" />
    </div>
    <h6 class="text-center my-4">{{ description }}</h6>
    <hr />
    <div class="d-flex justify-content-center">
      <button
        class="btn me-4"
        :style="{ backgroundColor: cancelColor, color: cancelTextColor, width: buttonWidth }"
        @click="emitOptions('cancel')"
      >
        {{ cancelLabel }}
      </button>
      <button
        class="btn"
        :style="{ backgroundColor: confirmColor, color: confirmTextColor, width: buttonWidth }"
        @click="emitOptions('confirm')"
      >
        {{ confirmLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Confirm deletion?",
  },
  description: {
    type: String,
    default: "The record will be deleted and cannot be recovered. Do you want to proceed?",
  },
  cancelLabel: {
    type: String,
    default: "Close",
  },
  confirmLabel: {
    type: String,
    default: "Confirm",
  },
  icon: {
    type: String,
    default: "",
  },

  confirmColor: {
    type: String,
    default: "red", 
  },
  cancelColor: {
    type: String,
    default: "blue", 
  },
  confirmTextColor: {
    type: String,
    default: "#fff",
  },
  cancelTextColor: {
    type: String,
    default: "#fff",
  },
  textColor: {
    type: String,
    default: "#212529",
  },
  fontFamily: {
    type: String,
    default: "'Segoe UI', sans-serif",
  },
  fontSize: {
    type: Number,
    default: 16,
  },
  buttonWidth: {
    type: String,
    default: "10rem",
  },
  iconColorClass: {
    type: String,
    default: "text-danger",
  }
});

const emitOptions = defineEmits(["cancel", "confirm"]);
</script>
