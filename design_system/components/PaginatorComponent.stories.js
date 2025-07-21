import PaginatorComponent from "../../src/components/PaginatorComponent.vue";

export default {
  title: "Paginator/PaginatorComponent",
  component: PaginatorComponent,
  argTypes: {
    totalPages: {
      control: { type: "number", min: 1 },
    },
    value: {
      control: { type: "number", min: 1 },
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "lg"],
    },
    color: {
      control: "color",
    },
    activeColor: {
      control: "color",
    },
    disabledColor: {
      control: "color",
    },
    justifyContent: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
    },
    page: { action: "page" }, 
  }
};

const Template = (args) => ({
  components: { PaginatorComponent },
  setup() {
    return { args };
  },
  template: `<PaginatorComponent v-bind="args" @page="args.page" />`,
});

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  value: 5,
  size: "lg",
  color: "#00bfff",
  activeColor: "#fff",
  disabledColor: "#aaa",
  justifyContent: "center",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  totalPages: 8,
  value: 4,
  size: "sm",
  color: "#28a745",
  activeColor: "#fff",
  disabledColor: "#bbb",
  justifyContent: "center",
};

export const FewPages = Template.bind({});
FewPages.args = {
  totalPages: 3,
  value: 2,
  size: "lg",
  color: "#007bff",
  activeColor: "#fff",
  disabledColor: "#ccc",
  justifyContent: "right",
};

export const StartPage = Template.bind({});
StartPage.args = {
  totalPages: 15,
  value: 1, 
  size: "lg",
  color: "#ff9800",
  activeColor: "#fff",
  disabledColor: "#999",
  justifyContent: "left",
};

export const EndPage = Template.bind({});
EndPage.args = {
  totalPages: 15,
  value: 15, 
  size: "lg",
  color: "#e91e63",
  activeColor: "#fff",
  disabledColor: "#777",
  justifyContent: "right",
};
