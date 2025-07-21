<template>
  <div ref="dropdownComponent" class="dropdown-component">
    <button
      class="nav-link btn-no-borders btn-padding mb-0 pb-0 d-flex align-items-center"
      @click="showDrop = !showDrop"
    >
      <p :class="{ active: isActive }" class="mb-0" :style="{ color: textColor }">
        {{ IntegrationLabel }}
      </p>
      <icon-component
        :style="{ color: textColor }"
        :icon-name="!showDrop ? 'expand_more' : 'expand_less'"
      />
    </button>
    <transition name="fade">
      <div
        v-if="showDrop"
        class="dropdown-container position-absolute"
        :style="{ backgroundColor: backgroundColor }"
      >
        <router-link
          v-for="(item, index) in list"
          :key="item.id ?? index"
          :to="{ name: item.route, params: { id: item.id ?? index } }"
          class="dropdown-link mb-3"
          :style="{ color: textColor }"
          @click="showDrop = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  IntegrationLabel: {
    type: String,
    default: 'Integrations',
  },
  textColor: {
    type: String,
    default: '#dfdfdf',
  },
  backgroundColor: {
    type: String,
    default: '#2193b0',
  },
  activeBorderColor: {
    type: String,
    default: '#3dc3fc',
  },
  hoverColor: {
    type: String,
    default: '#079ad9',
  },
  arrowColor: {
    type: String,
    default: '#2193b0',
  },
})

const showDrop = ref(false)
const dropdownComponent = ref(null)
const route = useRoute()

const isActive = computed(() => {
  return route?.name?.includes('integrations')
})

function onClickOutsideHandler(event) {
  if (dropdownComponent.value && !dropdownComponent.value.contains(event.target)) {
    showDrop.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutsideHandler)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutsideHandler)
})
</script>

<style lang="scss" scoped>
.dropdown-component {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .active {
    padding-bottom: 0;
    border-bottom: 2px solid #{activeBorderColor};
  }

  .dropdown-container {
    z-index: 999999;
    max-width: 350px;
    height: auto;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    box-shadow: var(--shadow-dropdown);
    position: relative;

    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid #{arrowColor};
      top: -10px;
      left: 20%;
    }

    .dropdown-link {
      text-decoration: none;
      transition: filter 0.5s;
      display: block;

      &:hover {
        filter: brightness(340%);
        border-bottom: 1px solid #{hoverColor};
      }
    }
  }
}
</style>
