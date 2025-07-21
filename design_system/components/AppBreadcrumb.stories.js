import AppBreadcrumb from '../../src/components/AppBreadcrumb.vue';

export default {
  title: 'Components/AppBreadcrumb',
  component: AppBreadcrumb,
  argTypes: {
    items: {
      control: 'object',
      defaultValue: [
        { title: 'Home', action: '/' },
        { title: 'Category', action: '/category' },
        { title: 'Subcategory' }
      ],
    },
    containerStyle: {
      control: 'object',
      description: 'Estilo CSS inline para o container do breadcrumb',
      defaultValue: {},
    },
  },
};

const Template = (args) => ({
  components: { AppBreadcrumb },
  setup() {
    return { args };
  },
  template: '<AppBreadcrumb v-bind="args" />',
});

// Posição à esquerda (padrão flex-start)
export const Left = Template.bind({});
Left.args = {
  items: [
    { title: 'Home', action: '/' },
    { title: 'Category', action: '/category' },
    { title: 'Subcategory' }
  ],
  containerStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '20px',
  },
};

// Posição centralizada
export const Center = Template.bind({});
Center.args = {
  items: [
    { title: 'Home', action: '/' },
    { title: 'Category', action: '/category' },
    { title: 'Subcategory' }
  ],
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  },
};

// Posição à direita (flex-end)
export const Right = Template.bind({});
Right.args = {
  items: [
    { title: 'Home', action: '/' },
    { title: 'Category', action: '/category' },
    { title: 'Subcategory' }
  ],
  containerStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '20px',
  },
};
