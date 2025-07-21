export default {
  stories: [
    '../design_system/components/**/*.stories.@(js|jsx|ts|tsx|vue)', 
    '../design_system/functions/**/*.stories.@(js|jsx|ts|tsx|vue)',
    '../design_system/animations/**/*.stories.@(js|jsx|ts|tsx|vue)'
  ],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        os: 'os-browserify/browser.js',
      },
    };
    return config;
  },
};
