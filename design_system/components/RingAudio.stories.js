import RingAudio from '@/components/RingAudio.vue';
import som from '@/assets/ring.wav'; 

export default {
  title: 'Audio/RingAudio',
  component: RingAudio,
  args: {
    srcUrl: som,
    audioType: 'audio/wav',
  },
};

const Template = (args) => ({
  components: { RingAudio },
  setup() {
    return { args };
  },
  template: '<RingAudio v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  srcUrl: som,
  audioType: 'audio/wav',
};
