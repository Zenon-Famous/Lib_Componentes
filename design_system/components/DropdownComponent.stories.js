import DropdownComponent from '@/templates/DropdownComponent.vue';

export default {
  title: 'Components/DropdownComponent',
  component: DropdownComponent,
  argTypes: {
    IntegrationLabel: { control: 'text' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    activeBorderColor: { control: 'color' },
    hoverColor: { control: 'color' },
    arrowColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { DropdownComponent },
  setup() {
    return { args };
  },
  template: '<DropdownComponent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  IntegrationLabel: 'Integrações',
  textColor: '#dfdfdf',
  backgroundColor: '#2193b0',
  activeBorderColor: '#3dc3fc',
  hoverColor: '#079ad9',
  arrowColor: '#2193b0',
  list: [
    { name: 'ITSM', route: 'integrations', id: 1 },
    { name: 'HSM', route: 'custom', id: 2 },
    { name: 'Power BI', route: 'integrations', id: 3 },
  ],
};
