<template>
  <div
    class="audio-player-component position-relative mb-1"
    :style="{
      '--plyr-color-main': playerColor,
      '--plyr-audio-controls-background': controlsBackground,
      ...containerStyle,
    }"
  >
    <audio
      :id="`Audio-Player-${src.Id}`"
      class="player w-100"
      controls
      playsinline
      :download="src.URL"
      crossorigin
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const props = defineProps({
  src: {
    type: Object,
    required: true,
  },
  playerColor: {
    type: String,
    default: '#00bfff', 
  },
  controlsBackground: {
    type: String,
    default: '#ededed', 
  },
  containerStyle: {
    type: Object,
    default: () => ({
      width: '100%', 
    })
  }
});

const player = ref(null);

const playerOptions = {
  autoplay: false,
  invertTime: false,
  i18n: {
    speed: "Velocidade",
    quality: "Qualidade",
    qualityLabel: {
      0: "Auto",
    },
  },
  speed: {
    selected: 1,
    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 3],
  },
};

onMounted(() => {
  const audioId = `Audio-Player-${props.src.Id}`;
  const audio = document.getElementById(audioId);
  if (!audio) return;

  const source = document.createElement("source");
  source.src = props.src.URL;

  if (props.src.URL.includes(".mp3")) source.type = "audio/mpeg";
  else if (props.src.URL.includes(".ogg")) source.type = "audio/ogg";
  else if (props.src.URL.includes(".wav")) source.type = "audio/wav";

  audio.appendChild(source);

  player.value = new Plyr(audio, playerOptions);

  let firstPlay = true;
  player.value.on("play", () => {
    if (firstPlay) {
      setTimeout(() => {
        player.value.currentTime = 0;
      }, 1);
      firstPlay = false;
    }
  });
});
</script>

<style scoped lang="scss">
.audio-player-component {
  :global(.plyr--audio),
  :global(.plyr__controls) {
    border-radius: 15px !important;
  }
}
</style>
