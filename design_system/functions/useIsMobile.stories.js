import { ref, watch } from 'vue';
import useIsMobile from '@/composables/useIsMobile';

export default {
  title: 'Functions/Hooks/useIsMobile',
};

export const CheckIsMobile = () => ({
  setup() {
    const { isMobile } = useIsMobile();
    const status = ref('');

    // Atualiza o status sempre que isMobile mudar
    watch(isMobile, (val) => {
      status.value = val ? 'Modo Mobile ativado 📱' : 'Modo Desktop ativado 💻';
    }, { immediate: true });

    return { isMobile, status };
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem;">
      <h2>Teste do Hook useIsMobile</h2>
      <p>Status atual: <strong>{{ status }}</strong></p>
      <p>Tente redimensionar a janela para ver a mudança.</p>
    </div>
  `,
});
