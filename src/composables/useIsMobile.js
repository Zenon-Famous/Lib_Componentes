import { onMounted, onUnmounted, ref } from "vue";
export default function useIsMobile() {
  const isMobile = ref(false);

  function handleScreenSize() {
    if (window.innerWidth < 768) {
      isMobile.value = true;
    } else {
      isMobile.value = false;
    }
  }

  onMounted(() => {
    window.addEventListener("resize", handleScreenSize);
    handleScreenSize();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleScreenSize);
  });

  return { isMobile };
}
