import CardHome from '@/home/CardHome.vue';

const MyCustomIcon = {
  name: 'MyCustomIcon',
  template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="black" stroke-width="2"/>
    <path d="M8 12L16 12" stroke="black" stroke-width="2"/>
  </svg>`,
};

export default {
  title: 'Components/CardHome',
  component: CardHome,
  argTypes: {
    backgroundColor: { control: 'color' },
    iconBackground: { control: 'color' },
    iconColor: { control: 'color' },
    titleColor: { control: 'color' },
    fontSize: { control: { type: 'number', min: 10, max: 40 } },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
};

const Template = (args) => ({
  components: { CardHome },
  setup() {
    return { args };
  },
  template: '<CardHome v-bind="args" />',
});

export const WithIconClass = Template.bind({});
WithIconClass.args = {
  item: {
    route: '/home',
    icon: 'material-icons', 
    title: 'Home',
  },
  backgroundColor: '#eee',
  iconBackground: '#ccc',
  iconColor: '#007bff',
  titleColor: '#333',
  fontSize: 18,
  orientation: 'horizontal',
};

export const WithCustomComponentIcon = Template.bind({});
WithCustomComponentIcon.args = {
  item: {
    route: '/custom',
    icon: MyCustomIcon,
    title: 'Custom Icon',
  },
  backgroundColor: '#fff8e1',
  iconBackground: '#ffeb3b',
  iconColor: '#f57f17',
  titleColor: '#f57f17',
  fontSize: 20,
  orientation: 'vertical',
};
