import DotPulseAnimation from '../../src/animations/DotPulseAnimation.vue';

export default {
  title: 'Animations/DotPulseAnimation',
  component: DotPulseAnimation,
};

const Template = () => ({
  components: { DotPulseAnimation },
  template: '<DotPulseAnimation />',
});

export const Default = Template.bind({});
