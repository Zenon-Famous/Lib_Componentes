import '../src/assets/scss/app.scss';
import '../src/assets/scss/main.scss';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/integrations/:id', name: 'integrations', component: { template: '<div>Integrations Page</div>' } },
    { path: '/custom/:id', name: 'custom', component: { template: '<div>Custom Page</div>' } },
  ],
});

export const setup = (app) => {
  app.use(router);
};
export const parameters = {
  backgrounds: {
    default: 'light',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
