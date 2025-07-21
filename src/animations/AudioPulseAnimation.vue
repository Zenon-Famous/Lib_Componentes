<template>
  <div class="audio-pulse-animation" :style="ContainerStyle">
    <div class="animation d-flex justify-content-center mt-2 mb-4">
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box1"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box2 mx-1"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box3"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box4 mx-1"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box5 me-1"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box1"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box2 mx-1"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box3"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box4 mx-1"
      ></div>
      <div
        :style="[hasDifColor ? personalBox : boxDefault]"
        class="box box5"
      ></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: "var(--animation-voice-bg)",
  },
  hasDifColor: {
    type: Boolean,
    default: false,
  },
  ContainerStyle: {
    type: Object,
    default: () => ({
      display: 'flex',
      justifyContent: 'flex-start'
    })
  }
});

// eslint-disable-next-line no-unused-vars
const personalBox = {
  transform: "scaleY(0.4)",
  height: "100%",
  width: "var(--boxSize)",
  background: props.bgColor,
  "animation-duration": "1.2s",
  "animation-timing-function": "ease-in-out",
  "animation-iteration-count": "infinite",
  "border-radius": "8px",
};

const boxDefault = {
  transform: "scaleY(0.4)",
  height: "100%",
  width: "var(--boxSize)",
  background: "var(--animation-voice-bg)",
  "animation-duration": "1.2s",
  "animation-timing-function": "ease-in-out",
  "animation-iteration-count": "infinite",
  "border-radius": "8px",
};
</script>
<style lang="scss" scoped>
.audio-pulse-animation {
  @keyframes quiet {
    25% {
      transform: scaleY(0.6);
    }
    50% {
      transform: scaleY(0.4);
    }
    75% {
      transform: scaleY(0.8);
    }
  }

  @keyframes normal {
    25% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.4);
    }
    75% {
      transform: scaleY(0.6);
    }
  }
  @keyframes loud {
    25% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.4);
    }
    75% {
      transform: scaleY(1.2);
    }
  }
  .animation {
    height: 34px;
    --boxSize: 8px;
    --gutter: 4px;
    width: calc((var(--boxSize) + var(--gutter)) * 5);
  }
  .box-default {
    transform: scaleY(0.4);
    height: 100%;
    width: var(--boxSize);
    background: var(--animation-voice-bg);
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    border-radius: 8px;
  }
  .box1 {
    animation-name: quiet;
  }

  .box2 {
    animation-name: normal;
  }

  .box3 {
    animation-name: quiet;
  }

  .box4 {
    animation-name: loud;
  }

  .box5 {
    animation-name: quiet;
  }
}
</style>
