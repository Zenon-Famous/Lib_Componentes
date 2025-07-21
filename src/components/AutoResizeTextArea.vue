<template>
  <div class="auto-resize-text-area" :style="containerStyle">
      <label
        v-if="label && label.length"
        class="mb-1"
        :for="id"
        :style="labelStyle"
      >
        {{ label }}
      </label>

      <textarea
        :id="id"
        ref="textArea"
        v-model="innerValue"
        class="form-control"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="disabled"
        :style="[textareaStyle, { color: placeholderColor }]"
        @input="resizeTextArea"
      ></textarea>

      <p
        v-if="showError"
        class="error text-danger"
        :style="errorStyle"
      >
        {{ RequiredLabel }}*
      </p>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: { type: String, required: true },
  id: { type: String, required: true },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  errors: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  rowsInit: { type: Number, default: 3 },
  RequiredLabel: { type: String, default: "Required field" },
  containerStyle: { type: Object, default: () => ({}) },
  
  //styles
  labelStyle: { type: Object, default: () => ({ color: "var(--decoration)" }) },
  errorStyle: { type: Object, default: () => ({ position: "absolute" }) },
  textareaStyle: {
    type: Object,
    default: () => ({
      height: "100%",
      maxHeight: "230px",
      paddingTop: "1.25rem",
      paddingBottom: "1.25rem",
      display: "block",
      boxSizing: "border-box",
    }),
  },
  placeholderColor: { type: String, default: "var(--placeholder)" },
});

const emit = defineEmits(["update:modelValue", "update:errors"]);

const showError = ref(props.errors);
const innerValue = ref(props.modelValue);
const rows = ref(props.rowsInit);
const textArea = ref(null);

function resizeTextArea() {
  if (!textArea.value) return;
  const textarea = textArea.value;
  textarea.rows = props.rowsInit;
  const scrollHeight = textarea.scrollHeight;
  const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;
  const calculatedRows = Math.min(
    Math.max(Math.ceil(scrollHeight / lineHeight), props.rowsInit),
    8
  );
  if (calculatedRows !== rows.value) {
    rows.value = calculatedRows;
  }
}

watch(innerValue, (newVal) => {
  if (newVal !== props.modelValue) {
    showError.value = false;
    emit("update:modelValue", newVal);
  }
});

watch(() => props.modelValue, (newVal) => {
  if (innerValue.value !== newVal) {
    innerValue.value = newVal;
    showError.value = false;
    rows.value = props.rowsInit;
  }
});

watch(() => props.errors, (newV) => {
  showError.value = newV;
});

watch(showError, (newV) => {
  if (newV !== props.errors) {
    emit("update:errors", newV);
  }
});
</script>

<style lang="scss" scoped>
</style>
