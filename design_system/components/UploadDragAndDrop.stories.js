import UploadDragAndDrop from '@/components/UploadDragAndDrop.vue';
import { h } from 'vue';

// Exemplo de ícones mock (substitua com seus próprios ícones reais ou componentes)
const UploadIcon = {
  name: 'UploadIcon',
  render() {
    return h('span', { style: { fontSize: '24px' } }, '⬆️');
  },
};

const FileIcon = {
  name: 'FileIcon',
  render() {
    return h('span', { style: { fontSize: '18px' } }, '📄');
  },
};

const TrashIcon = {
  name: 'TrashIcon',
  render() {
    return h('span', { style: { color: 'red' } }, '🗑️');
  },
};

export default {
  title: 'Components/UploadDragAndDrop',
  component: UploadDragAndDrop,
  argTypes: {
    label: { control: 'text' },
    uploadLabel: { control: 'text' },
    showArchives: { control: 'boolean' },
    isMultiple: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { UploadDragAndDrop },
  setup() {
    return { args };
  },
  template: `<UploadDragAndDrop v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Envie seus arquivos',
  uploadLabel: 'Clique ou arraste aqui',
  showArchives: true,
  isMultiple: true,
};

export const WithCustomIcons = Template.bind({});
WithCustomIcons.args = {
  label: 'Arquivos com ícones',
  uploadLabel: 'Escolha arquivos',
  showArchives: true,
  isMultiple: true,
  uploadIcon: UploadIcon,
  fileIcon: FileIcon,
  removeIcon: TrashIcon,
};
