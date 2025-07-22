import VoidMessage from "@/components/VoidMessage.vue";

export default {
  title: "Components/VoidMessage",
  component: VoidMessage,
  argTypes: {
    message: { control: "text" },
    isError: { control: "boolean" },
    haveSearchTerm: { control: "boolean" },
    querySearch: { control: "text", name: "Query Search" },
    errorMessage: { control: "text" },
    emptyMessage: { control: "text" },
    noResultsText: { control: "text" },
    textRetryButton: { control: "text" },
    textColor: { control: "color" },
    textAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    TextFontSize: { control: "text" },
    buttonStyle: { control: "object" },
  },
};

const Template = (args) => ({
  components: { VoidMessage },
  setup() {
    return { args };
  },
  template: `<VoidMessage v-bind="args" @action="args.onAction" />`,
});

export const Default = Template.bind({});
Default.args = {
  message: "",
  isError: false,
  haveSearchTerm: false,
  querySearch: "",
  errorMessage:
    "There was an error loading the data, please try again! If the error persists, contact support.",
  emptyMessage: "No registered data",
  noResultsText: "No results for",
  textRetryButton: "Try Again",
  textColor: "#212529",
  textAlign: "center",
  TextFontSize: "1rem",
  buttonStyle: {
    all: "unset",
    color: "#0d6efd",
    fontSize: "0.9rem",
    textDecoration: "underline",
    textDecorationColor: "#0d6efd",
    cursor: "pointer",
  },
  onAction: () => alert("Try Again triggered"),
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  message: "Nenhum item encontrado.",
  isError: false,
  haveSearchTerm: false,
  textRetryButton: "Tentar Novamente",
  textColor: "#212529",
  textAlign: "center",
  TextFontSize: "1rem",
  buttonStyle: Default.args.buttonStyle,
  onAction: () => console.log("Tentativa novamente acionada"),
};

export const WithSearchTerm = Template.bind({});
WithSearchTerm.args = {
  haveSearchTerm: true,
  querySearch: "Tênis Nike",
  noResultsText: "Nenhum resultado para",
  textRetryButton: "Tentar Novamente",
  textColor: "#fd9b08",
  textAlign: "left",
  TextFontSize: "1rem",
  buttonStyle: Default.args.buttonStyle,
  onAction: () => console.log("Rebuscar resultado"),
};

export const WithError = Template.bind({});
WithError.args = {
  isError: true,
  errorMessage: "Erro ao buscar dados. Tente novamente.",
  emptyMessage: "Nenhum dado cadastrado.",
  textRetryButton: "Tentar Novamente",
  textColor: "#dc3545",
  textAlign: "center",
  TextFontSize: "1.1rem",
  buttonStyle: {
    all: "unset",
    color: "#c90fb9ff",
    fontSize: "0.9rem",
    textDecoration: "underline",
    textDecorationColor: "#000000ff",
    cursor: "pointer",
  },
};
