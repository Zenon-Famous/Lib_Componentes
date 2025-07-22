import AudioPlayer from "@/components/AudioPlayer.vue";

export default {
  title: "Audio/AudioPlayer",
  component: AudioPlayer,
  argTypes: {
    playerColor: {
      control: "color",
      description: "Cor principal dos controles (ex: botão de play)",
    },
    controlsBackground: {
      control: "color",
      description: "Cor de fundo dos controles de áudio",
    },
    containerStyle: {
      control: "object",
      description: "Estilo aplicado ao container externo (ex: width)",
    },
    src: {
      control: "object",
      description: "Fonte do áudio (objeto com Id e URL)",
    },
  },
};

const Template = (args) => ({
  components: { AudioPlayer },
  setup() {
    return { args };
  },
  template: `<AudioPlayer v-bind="args" />`,
});

export const Default = Template.bind({})
Default.args = {
  src: {
    Id: 5,
    URL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  }
}

export const TypeOne = Template.bind({});
TypeOne.args = {
  src: {
    Id: 1,
    URL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  playerColor: "#00bfff", // azul claro
  controlsBackground: "#000000", // fundo preto
  containerStyle: {
    width: "60%",
  },
};

export const TypeTwo = Template.bind({});
TypeTwo.args = {
  src: {
    Id: 2,
    URL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  playerColor: "#ff69b4", // rosa
  controlsBackground: "#fff0f5", // rosado claro
  containerStyle: {
    width: "60%",
  },
};
