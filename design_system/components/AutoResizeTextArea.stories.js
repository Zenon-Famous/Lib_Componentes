import AutoResizeTextArea from '@/components/AutoResizeTextArea.vue';

export default {
  title: 'Components/AutoResizeTextArea',
  component: AutoResizeTextArea,
  argTypes: {
    modelValue: { control: 'text' },
    id: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errors: { control: 'boolean' },
    disabled: { control: 'boolean' },
    rowsInit: { control: 'number' },
    RequiredLabel: { control: 'text' },
    containerStyle: { control: 'object' },
    wrapperStyle: { control: 'object' },
    labelStyle: { control: 'object' },
    errorStyle: { control: 'object' },
    textareaStyle: { control: 'object' },
    placeholderColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { AutoResizeTextArea },
  setup() {
    return { args };
  },
  template: '<AutoResizeTextArea v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  id: 'example-textarea',
  label: 'Descrição',
  placeholder: 'Digite sua descrição...',
  errors: true,
  disabled: false,
  rowsInit: 3,
  RequiredLabel: 'Campo obrigatório',

  containerStyle: {
    backgroundColor: '#f8f9fa',
    width: '50%',
    padding: '1rem',
    borderRadius: '8px',
  },
  labelStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  errorStyle: {
    color: 'red',
    fontSize: '0.875rem',
    position: 'absolute',
    marginTop: '0.25rem',
  },
  textareaStyle: {
    height: '100%',
    width: '50%',
    maxHeight: '230px',
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
    display: 'block',
    boxSizing: 'border-box',
    lineHeight: '1.5',
    fontSize: '1rem',
    borderColor: '#ced4da',
  },
  placeholderColor: 'black',
};
