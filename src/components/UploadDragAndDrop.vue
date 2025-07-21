<template>
  <div class="upload-drag-and-drop w-100" :style="Content">
    <label v-if="label.length" class="blackAndWhite">{{ label }}</label>

    <div class="drop-zone" :style="dropZoneStyle" @drop="handleDrag" @dragover.prevent>
      <div class="w-100 h-100 d-flex flex-column">
        <input
          ref="inputFile"
          type="file"
          class="d-none"
          multiple
          @change="getValue"
        />
        <button
          class="btn-no-borders d-flex flex-column align-items-center justify-content-center p-0 m-0"
          @click="openArchive"
          style="width: 100%; height: 100%;"
        >
         
          <component
            v-if="uploadIcon"
            :is="uploadIcon"
            class="mb-1"
          />
          <span class="blackAndWhite">{{ uploadLabel }}</span>
        </button>
      </div>
    </div>

   
    <div v-if="filesList.length && showArchives" class="d-flex flex-column pt-4">
      <div
        v-for="(file, index) in filesList"
        :key="`file-index-${index}`"
        class="d-flex align-items-center"
      >
  
        <component
          v-if="fileIcon"
          :is="fileIcon"
          class="me-2"
        />
        <span class="me-2">{{ file.name }}</span>
        <button class="btn-no-borders text-danger" @click="removeItem(index)">
          <component
            v-if="removeIcon"
            :is="removeIcon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emitOptions = defineEmits(["update:modelValue"]);

const props = defineProps({
  isMultiple: Boolean,
  isDrag: Boolean,
  modelValue: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: "",
  },
  showArchives: {
    type: Boolean,
    default: true,
  },
  uploadLabel: {
    type: String,
    default: "Drag and drop or browse",
  },
  dropZoneStyle: {
    type: Object,
    default: () => ({
      border: '2px dashed #00fff7',
      width: '300px',
      height: '100px',
      cursor: 'pointer',
      background: 'var(--bg-drag-drop)',
    }),
  },
  Content: {
    type: Object,
    default: () => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }),
  },

  uploadIcon: {
    type: [Object, Function], 
    default: null,
  },
  fileIcon: {
    type: [Object, Function],
    default: null,
  },
  removeIcon: {
    type: [Object, Function],
    default: null,
  },
});

const inputFile = ref(null);
const innerValue = ref([...props.modelValue]);  
const filesList = ref([...props.modelValue]);  

watch(innerValue, (newV) => {
  emitOptions("update:modelValue", newV);
});

watch(() => props.modelValue, (newV) => {
  innerValue.value = [...newV];
  filesList.value = [...newV];
});

function handleDrag(event) {
  event.preventDefault();
  const files = Array.from(event.dataTransfer?.files || []);
  updateAll(files);
}

function openArchive() {
  inputFile.value.click();
}

function getValue(event) {
  const files = Array.from(event.target.files || []);
  updateAll(files);
}

function removeItem(index) {
  filesList.value.splice(index, 1);
  innerValue.value.splice(index, 1);
  emitOptions("update:modelValue", [...innerValue.value]); 
}

function updateAll(files) {
  const newFiles = files.filter(file =>
    !filesList.value.some(f => f.name === file.name && f.size === file.size)
  );

  filesList.value.push(...newFiles);
  innerValue.value.push(...newFiles);
  emitOptions("update:modelValue", [...innerValue.value]); 
}
</script>

<style lang="scss" scoped>
</style>
