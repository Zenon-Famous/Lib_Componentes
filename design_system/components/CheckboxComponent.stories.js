import CheckboxComponent from '../../src/profile/CheckboxComponent.vue';
import { ref } from 'vue';

export default {
  title: 'Interactions/CheckboxComponent',
  component: CheckboxComponent,
  argTypes: {
    color: { control: 'color' },
    isActive: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { CheckboxComponent },
  setup() {
    const active = ref(args.isActive);

    const toggle = () => {
      active.value = !active.value;
    };

    return { args, active, toggle };
  },
  template: `
    <div @click="toggle" style="cursor: pointer; width: fit-content;">
      <CheckboxComponent :color="args.color" :isActive="active" />
      <p style="margin-top: 10px">Clique para alternar. Ativo: <strong>{{ active }}</strong></p>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  color: '#3498db',
  isActive: false,
};

export const GreenActive = Template.bind({});
GreenActive.args = {
  color: '#2ecc71',
  isActive: true,
};

export const RedInactive = Template.bind({});
RedInactive.args = {
  color: '#e74c3c',
  isActive: false,
};
