<template>
  <div :style="ContainerStyle">
    <div class="dot-pulse-animation">
      <div class="snippet" data-title="dot-pulse">
        <div class="stage">
          <div class="dot-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ContainerStyle: {
    type: Object,
    default: () => ({
      display: 'flex',
      justifyContent: 'center',
    }),
  },
  dotColor: {
    type: String,
    default: 'var(--animation-voice-bg)',
  },
});
</script>

<style lang="scss" scoped>
.dot-pulse-animation {
  .stage {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 32px 0;
    margin: 0 -5%;
  }
  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 4px;
    height: 4px;
    border-radius: 5px;
    background-color: v-bind('dotColor');
    color: v-bind('dotColor');
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before,
  .dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 4px;
    height: 4px;
    border-radius: 5px;
    background-color: v-bind('dotColor');
    color: v-bind('dotColor');
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px;
    }
    30% {
      box-shadow: 9984px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9984px 0 0 -5px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px;
    }
    30% {
      box-shadow: 9999px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9999px 0 0 -5px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px;
    }
    30% {
      box-shadow: 10014px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 10014px 0 0 -5px;
    }
  }
}
</style>
