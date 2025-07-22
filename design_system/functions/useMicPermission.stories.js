import { ref, onMounted, watch } from 'vue';
import useMicPermission from '@/composables/useMicPermission';

export default {
  title: 'Functions/Hooks/useMicPermission',
};

export const CheckMicPermission = () => ({
  setup() {
    const { hasMicPermission, checkMicrophonePermissionAndAvailability } = useMicPermission();
    const statusText = ref('Verificando permissão...');

    onMounted(() => {
      checkMicrophonePermissionAndAvailability();
    });

    // Atualiza o texto de status conforme a permissão
    watch(hasMicPermission, (newVal) => {
      statusText.value = newVal ? 'Microfone permitido ✅' : 'Microfone negado ❌';
    });

    return { hasMicPermission, statusText, checkMicrophonePermissionAndAvailability };
  },

  template: `
    <div style="font-family: sans-serif; padding: 1rem;">
      <h2>Teste do Hook de Permissão do Microfone</h2>
      <p>Status: {{ statusText }}</p>
      <button @click="checkMicrophonePermissionAndAvailability">Checar Permissão Novamente</button>
    </div>
  `,
});
