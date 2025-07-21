<template>
  <div class="void-message-component">
    <div class="row justify-content-center">
      <div class="col-4">
        <h5
          v-if="haveSearchTerm"
          :class="textClasses"
          :style="textStyles"
        >
          {{ noResultsText }}:
          <span class="ps-2">{{ querySearch }}</span>
        </h5>
        <h6
          v-else-if="message?.length"
          :class="textClasses"
          :style="textStyles"
        >
          {{ message }}
        </h6>

        <h6
          v-else
          :class="textClasses"
          :style="textStyles"
        >
          {{ msg }}
        </h6>
      </div>
    </div>

    <div v-if="isError" class="d-flex justify-content-center mt-2">
      <button
        class="buttonClass"
        :style="buttonStyles"
        @click="tryAgain"
      >
        {{ textRetryButton }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  message: String,
  isError: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default:
      "There was an error loading the data, please try again! If the error persists, contact support.",
  },
  emptyMessage: {
    type: String,
    default: "No registered data",
  },
  haveSearchTerm: { 
    type: Boolean,
    default: false 
  },
  querySearch: String,
  textRetryButton: {
    type: String,
    default: "Try Again"
  },
  noResultsText: {
    type: String,
    default: "No results for"
  },


  textColor: { type: String, default: "#212529" },
  textAlign: { type: String, default: "center" }, 
  TextFontSize: { type: String, default: "1rem" },
  buttonStyle: {
    type: Object,
    default: () => ({
      all: "unset",
      color: "#0d6efd",
      fontSize: "0.9rem",
      textDecoration: "underline",
      textDecorationColor: "#0d6efd",
      cursor: "pointer",
    }),
  },
});

const emitOptions = defineEmits(["action"]);

const buttonStyles = computed(() => props.buttonStyle);

const msg = computed(() => {
  return props.isError ? props.errorMessage : props.emptyMessage;
});

function tryAgain() {
  emitOptions("action");
}

const textClasses = computed(() => {
  const alignMap = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end',
  };
  return alignMap[props.textAlign] || 'text-center';
});
const textStyles = computed(() => ({
  color: props.textColor,
  fontSize: props.fontSize,
}));
</script>

<style lang="scss" scoped>
.void-message-component {
  h6 {
    line-height: 28px;
  }
}
</style>
