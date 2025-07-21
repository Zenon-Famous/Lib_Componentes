import ConfirmationModal from "../../src/components/ConfirmationModal.vue";

export default {
  title: 'Components/ConfirmationModal',
  component: ConfirmationModal,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    cancelLabel: { control: 'text' },
    confirmLabel: { control: 'text' },
    icon: { control: 'text' },
    cancel: { action: 'cancel' },
    confirm: { action: 'confirm' },
  },
};

const Template = (args) => ({
  components: { ConfirmationModal },
  setup() {
    return { args };
  },
  template: `<ConfirmationModal v-bind="args" @cancel="args.cancel" @confirm="args.confirm" />`,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Confirm deletion?',
  description: 'This action cannot be undone. Are you sure you want to proceed?',
  cancelLabel: 'Cancel',
  confirmLabel: 'Yes, delete',
  //icon: 'warning', 
};
