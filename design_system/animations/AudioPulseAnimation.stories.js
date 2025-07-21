import AudioPulseAnimation from '../../src/animations/AudioPulseAnimation.vue';

export default {
  title: 'Animations/AudioPulseAnimation',
  component: AudioPulseAnimation,
  argTypes: {
    bgColor: {
      control: 'color',
      description: 'Cor de fundo personalizada para as barras animadas',
      defaultValue: 'var(--animation-voice-bg)',
    },
    hasDifColor: {
      control: 'boolean',
      description: 'Ativa ou não o uso de cor personalizada',
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { AudioPulseAnimation },
  setup() {
    return { args };
  },
  template: '<AudioPulseAnimation v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  hasDifColor: false,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  hasDifColor: true,
  bgColor: '#4CAF50', // Exemplo de verde
};