<template>
  <audio ref="audio" hidden="true" loop>
    <source :src="props.srcUrl" :type="props.audioType" />
  </audio>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  srcUrl: {
    type: String,
  },
  audioType: {
    type: String,
  },
});

const audio = ref(null);

onMounted(() => {
  if (audio.value) {
    audio.value.play().catch((err) => {
      console.warn("Falha ao reproduzir o áudio:", err);
    });
  }
});
</script>
<style scoped></style>
