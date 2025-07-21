<template>
  <div class="form-group-component form-group position-relative">
    <label
      v-if="label?.length"
      :for="id"
      class="mb-1"
      :style="labelStyle"
    >
      {{ label }}
    </label>

    <!-- Without mask -->
    <input
      v-if="!masked || isEmptyMask"
      :id="id"
      v-model="innerValue"
      :name="id"
      :type="type"
      class="form-control"
      :class="[sizeSm ? 'size-sm' : '']"
      :style="computedInputStyle"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <!-- With mask -->
    <input
      v-else
      :id="id"
      v-model="innerValue"
      v-mask="mask"
      :name="id"
      :type="type"
      class="form-control"
      :class="[sizeSm ? 'size-sm' : '']"
      :style="computedInputStyle"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <p
      v-if="showError"
      class="mb-0 position-absolute error-msg"
      :style="computedErrorMsgStyle"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  id: { type: String, required: true },
  type: { type: String, default: "text" },
  error: { type: Boolean, default: false },
  placeholder: { type: String, default: "" },
  label: { type: String },
  modelValue: { type: [String, Number], required: true },
  sizeSm: { type: Boolean, default: false },
  masked: { type: Boolean, default: false },
  mask: { type: [String, Array], default: "" },
  errorMsg: { type: [String, Object], default: "Required field*" },
  autocomplete: { type: String, default: "off" },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },

  errorBorderColor: { type: String, default: "none" },
  labelColor: { type: String, default: "var(--decoration)" },

  inputStyle: { type: Object, default: () => ({}) },
  inputFocusStyle: {
    type: Object,
    default: () => ({
      outline: "none",
      borderColor: "#007bff",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
    }),
  },


  errorMsgColor: { type: String, default: "#ff0000" },
  errorMsgFontSize: { type: String, default: "14px" },
});

const emitOptions = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);
const showError = ref(props.error);
const isFocused = ref(false);

const isEmptyMask = computed(() => {
  const m = props.mask;
  return m === "" || (Array.isArray(m) && m.length === 0);
});

const errorText = computed(() => {
  if (typeof props.errorMsg === "string") {
    return props.errorMsg;
  }
  if (typeof props.errorMsg === "object" && props.errorMsg !== null) {
    return props.errorMsg.text || "";
  }
  return "";
});

const computedErrorMsgStyle = computed(() => {
  if (
    typeof props.errorMsg === "object" &&
    props.errorMsg !== null &&
    props.errorMsg.style
  ) {
    return props.errorMsg.style;
  }
  return {
    color: props.errorMsgColor,
    fontSize: props.errorMsgFontSize,
  };
});


const errorBorderStyle = computed(() => {
  if (showError.value && !isFocused.value) {
    return {
      border: `1px solid ${
        computedErrorMsgStyle.value.color || props.errorBorderColor
      }`,
    };
  }
  return {};
});

const computedInputStyle = computed(() => {
  let style = { ...props.inputStyle };
  if (showError.value && !isFocused.value) {
    style = { ...style, ...errorBorderStyle.value };
  }
  if (isFocused.value) {
    style = { ...style, ...props.inputFocusStyle };
  }
  return style;
});

const labelStyle = computed(() => ({
  color: props.labelColor,
}));

watch(() => props.error, (newVal) => {
  showError.value = newVal;
});

watch(() => props.modelValue, (val) => {
  innerValue.value = val;
});

watch(innerValue, (val) => {
  emitOptions("update:modelValue", val);
  if (val && showError.value) {
    showError.value = false;
  }
});
</script>

<style lang="scss" scoped>
.form-group-component {
  position: relative;

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  .size-sm {
    padding: 4px 6px;
    height: 30px;
    font-size: 12px;

    &::placeholder {
      font-size: 12px;
      font-weight: 500;
    }
  }
}
</style>
