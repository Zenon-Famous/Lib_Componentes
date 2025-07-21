import FormGroup from '../../src/components/FormGroup.vue';

export default {
  title: 'Form/FormGroup',
  component: FormGroup,
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    errorMsg: { control: 'Object' },
    sizeSm: { control: 'boolean' },
    masked: { control: 'boolean' },
    mask: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean'},
  },
};

const Template = (args) => ({
  components: { FormGroup },
  setup() {
    return { args };
  },
  template: `<FormGroup v-bind="args" v-model="args.modelValue" />`,
});

export const Default = Template.bind({});
Default.args = {
  id: 'input1',
  label: 'Nome',
  placeholder: 'Digite seu nome',
  modelValue: '',
  masked: false,
};

export const WithMask = Template.bind({});
WithMask.args = {
  id: 'tel',
  label: 'Telefone',
  placeholder: '(00) 00000-0000',
  modelValue: '',
  masked: true,
  mask: '(##) #####-####',
  required: true,
  inputStyle: { backgroundColor: 'yellow', color: 'red' }
};


export const WithStyledError = Template.bind({});
WithStyledError.args = {
  id: 'email',
  label: 'Email',
  placeholder: 'Digite seu email',
  modelValue: '',
  error: true,
  errorMsg: {
    text: 'Email é obrigatório!',
    style: {
      color: 'black',
      fontSize: '12px',
      fontWeight: 'bold',
    },
  },
};
