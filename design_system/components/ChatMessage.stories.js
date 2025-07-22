import ChatMessage from '../../src/components/ChatMessageView.vue';
import { h } from 'vue';

// Ícones mock
const DummyIcon = {
  render() {
    return h('span', { class: 'material-symbols-sharp' }, 'face');
  },
};

export default {
  title: 'Components/ChatMessage',
  component: ChatMessage,
};

const baseMessage = {
  Participant: { NickName: 'João' },
  ReceivedTime: new Date().toISOString(),
  Direction: 'Inbound',
};

export const TextoSimples = () => ({
  components: { ChatMessage },
  template: '<ChatMessage :message="message" />',
  data() {
    return {
      message: {
        ...baseMessage,
        Type: 'Text',
        Message: 'Olá, tudo bem?',
      },
    };
  },
});

export const TextoComMarkdown = () => ({
  components: { ChatMessage },
  template: '<ChatMessage :message="message" />',
  data() {
    return {
      message: {
        ...baseMessage,
        Type: 'Text',
        Message: '> Citação\n*Negrito* _Itálico_ `Código` ~Riscado~',
      },
    };
  },
});

export const Imagem = () => ({
  components: { ChatMessage },
  template: '<ChatMessage :message="message" />',
  data() {
    return {
      message: {
        ...baseMessage,
        Type: 'Attachment',
        MimeType: 'image/png',
        URL: 'https://via.placeholder.com/200',
        Caption: 'Exemplo de imagem',
      },
    };
  },
});

export const Audio = () => ({
  components: { ChatMessage },
  template: '<ChatMessage :message="message" />',
  data() {
    return {
      message: {
        ...baseMessage,
        Type: 'Attachment',
        MimeType: 'audio/mpeg',
        URL: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        Caption: 'Exemplo de áudio',
        MediaType: 'Audio',
      },
    };
  },
});

export const Video = () => ({
  components: { ChatMessage },
  template: '<ChatMessage :message="message" />',
  data() {
    return {
      message: {
        ...baseMessage,
        Type: 'Attachment',
        MimeType: 'video/mp4',
        URL: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        Caption: 'Exemplo de vídeo',
      },
    };
  },
});

export const Documento = () => ({
  components: { ChatMessage },
  template: '<ChatMessage :message="message" />',
  data() {
    return {
      message: {
        ...baseMessage,
        Type: 'Attachment',
        MimeType: 'application/pdf',
        URL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        Filename: 'documento.pdf',
        Caption: 'Exemplo de documento',
      },
    };
  },
});

export const DeAgente = () => ({
  components: { ChatMessage },
  template: '<ChatMessage :message="message" :accountCircleIcon="icon" :downloadIcon="icon" />',
  data() {
    return {
      icon: DummyIcon,
      message: {
        ...baseMessage,
        Direction: 'Outbound',
        Type: 'Text',
        Message: 'Mensagem do agente com ícone customizado.',
        Participant: { Name: 'Agente' },
      },
    };
  },
});