import DataView from "../../src/components/DataView.vue";
import { ref } from "vue";

export default {
  title: "Components/DataView",
  component: DataView,
};

const columns = [
  { title: "ID", field: "id" },
  { title: "Name", field: "name" },
  { title: "Email", field: "email" },
  {
    title: "Custom",
    eval: (row) => row.name.toUpperCase(),
  },
];

const mockData = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
  { id: 3, name: "Charlie", email: "charlie@email.com" },
];

const actions = [
  {
    name: "Edit",
    icon: "edit",
    action: (row) => alert("Edit " + row.name),
  },
  {
    name: "Delete",
    icon: "delete",
    action: (row) => alert("Delete " + row.name),
  },
];

const Template = (args) => ({
  components: { DataView },
  setup() {
    const loading = ref(false);
    const actualPage = ref(1);
    const totalPages = ref(5);

    const handleChangePage = (page) => {
      actualPage.value = page;
      alert("Changed to page: " + page);
    };

    const handleItemClick = (item) => {
      alert("Clicked row: " + JSON.stringify(item));
    };

    return {
      ...args,
      loading,
      actualPage,
      totalPages,
      handleChangePage,
      handleItemClick,
    };
  },
  template: `
    <DataView
      :columns="columns"
      :data="data"
      :actions="actions"
      :loading="loading"
      :actualPage="actualPage"
      :totalPages="totalPages"
      @changePage="handleChangePage"
      @itemClick="handleItemClick"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  columns,
  data: mockData,
  actions,
};
