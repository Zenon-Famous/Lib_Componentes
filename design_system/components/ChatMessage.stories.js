import ChatMessage from '../../src/components/ChatMessageView.vue';
import { h } from "vue";

const MockAccountCircle = {
  name: "MockAccountCircle",
  render() {
    return h("span", { style: { fontSize: "24px", color: "gray" } }, "👤");
  },
};
const MockDownloadIcon = {
  name: "MockDownloadIcon",
  render() {
    return h("span", { style: { fontSize: "18px", color: "blue" } }, "⬇️");
  },
};

export default {
  title: "Chat/ChatMessage",
  component: ChatMessage,
  argTypes: {
    accountCircleIcon: { control: false },
    downloadIcon: { control: false },
    message: { control: false },
  },
};

const baseMessageText = {
  Type: "Text",
  Message: "Olá, *mundo*! `Código` e _italico_ também.",
  Direction: "Inbound",
  Participant: { NickName: "Cliente" },
  ReceivedTime: new Date().toISOString(),
};

const baseMessageAttachment = {
  Type: "Attachment",
  MimeType: "audio/mpeg",
  MediaType: "Audio",
  URL: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  Filename: "audio.mp3",
  Caption: "Arquivo de áudio",
  Direction: "Outbound",
  Participant: { Name: "Agente" },
  ReceivedTime: new Date().toISOString(),
};

const Template = (args) => ({
  components: { ChatMessage },
  setup() {
    return { args };
  },
  template: `<ChatMessage v-bind="args" />`,
});

export const TextMessage = Template.bind({});
TextMessage.args = {
  message: baseMessageText,
  accountCircleIcon: MockAccountCircle,
};

export const AttachmentAudio = Template.bind({});
AttachmentAudio.args = {
  message: baseMessageAttachment,
  accountCircleIcon: MockAccountCircle,
  downloadIcon: MockDownloadIcon,
};
