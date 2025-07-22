import TabsComponent from '@/profile/resume/TabsComponent.vue';
import { ref } from 'vue';

export default {
  title: 'Interactions/TabsComponent',
  component: TabsComponent,
  argTypes: {
    activeTab: { control: 'text' },
    tabs: { control: 'array' },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    tabColor: { control: 'color' },
    activeTabColor: { control: 'color' },
    borderColor: { control: 'color' },
    activeBorderColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { TabsComponent },
  setup() {
    const activeTab = ref(args.activeTab);
    const changeTab = (tab) => {
      activeTab.value = tab;
    };
    return { args, activeTab, changeTab };
  },
  template: `
    <TabsComponent
      :tabs="args.tabs"
      :activeTab="activeTab"
      :orientation="args.orientation"
      :tabColor="args.tabColor"
      :activeTabColor="args.activeTabColor"
      :borderColor="args.borderColor"
      :activeBorderColor="args.activeBorderColor"
      @changeTab="changeTab"
    />
    <p style="margin-top: 1rem;">Aba ativa: <strong>{{ activeTab }}</strong></p>
  `,
});

export const Vertical = Template.bind({});
Vertical.args = {
  tabs: ['Perfil', 'Configurações', 'Segurança'],
  activeTab: 'Perfil',
  orientation: 'vertical',
  tabColor: '#666666',
  activeTabColor: '#1d4ed8', // azul escuro
  borderColor: '#cccccc',
  activeBorderColor: '#1d4ed8',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  tabs: ['Perfil', 'Configurações', 'Segurança'],
  activeTab: 'Perfil',
  orientation: 'horizontal',
  tabColor: '#666666',
  activeTabColor: '#dc2626', // vermelho
  borderColor: '#cccccc',
  activeBorderColor: '#dc2626',
};
