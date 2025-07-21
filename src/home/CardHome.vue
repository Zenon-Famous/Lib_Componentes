<template>
  <div :style="ContainerStyle">
    <router-link
      :to="item.route"
      class="card-home-component"
      :class="{
        'flex-md-row': orientation === 'horizontal',
        'flex-md-column': orientation === 'vertical',
        'flex-column': orientation === 'vertical',
        'flex-row': orientation === 'horizontal'
      }"
      :style="{ background: backgroundColor }"
    >
      <div class="icon-container me-2" :style="{ background: iconBackground }">
        <component v-if="isComponent" :is="item.icon" :style="{ color: iconColor }" />
        <i v-else :class="item.icon" :style="{ color: iconColor }"></i>
      </div>
      <p class="mb-0 title" :style="{ fontSize: fontSize + 'px', color: titleColor }">
        {{ item.title }}
      </p>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  backgroundColor: {
    type: String,
    default: 'var(--home-card-bg)',
  },
  iconBackground: {
    type: String,
    default: 'var(--home-card-icon-container)',
  },
  iconColor: {
    type: String,
    default: 'var(--home-card-icon-color)',
  },
  titleColor: {
    type: String,
    default: 'var(--home-card-title-color)',
  },
  fontSize: {
    type: [String, Number],
    default: 14,
  },
  orientation: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value),
  },
  ContainerStyle: {
    type: Object,
    default: () => ({
      display: 'flex',
      justifyContent: 'center',
    }),
  },
});

const isComponent = computed(() => {
  return typeof props.item.icon === 'object' || typeof props.item.icon === 'function';
});
</script>


<style lang="scss" scoped>
.card-home-component {
  border-radius: 12px;
  padding: 20px;
  width: 312px;
  text-decoration: none;
  display: flex;
  align-items: center;

  .icon-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 16px;
    }
  }

  .title {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media screen and (max-width: 768px) {
    width: 161px;
    margin-bottom: 24px;

    .icon-container {
      margin-bottom: 23px;
    }
  }
}
</style>
       