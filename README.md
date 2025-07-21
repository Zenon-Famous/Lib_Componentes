# 🌟 Vue Component Library

A modular, testable, and fully documented **Vue 3 component library** featuring reusable components, utility functions, animations, formatters, and more — all designed for modern Vue.js applications.

---

## ✨ Features

- 🎨 10+ reusable Vue components
- 🧪 Powered by **Vitest** for unit testing
- 📚 Fully documented with **Storybook**
- 🎭 Input masking with **vue-the-mask**
- 🎥 Media player with **plyr**
- 🧭 Vue Router compatible
- 📁 Organized by domain (components, formatters, utils, composables)

---

## 📦 Installation

```bash
npm install
# or
yarn install
```

---

## 🧪 Testing

Run unit tests using **Vitest**:

```bash
npm run test
```

Generate coverage report:

```bash
npm run coverage
```

---

## 📚 Storybook

Explore components visually in a local environment:

```bash
npm run storybook
```

Generate static Storybook build:

```bash
npm run build-storybook
```

---

## 🔌 Plugin Registration

Register the library globally in your Vue app:

```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // your Vue Router instance
import MyLibrary from 'like-lib-crm';
import 'my-vue-library/dist/style.css';

// VueTheMask (already used by the lib, but you can also use it globally if needed)
import { mask } from 'vue-the-mask';

// Plyr styles (if needed globally) --- npm i plyr
import 'plyr/dist/plyr.css';

const app = createApp(App);

// Optional: You can register the mask directive globally (library already does internally)
app.directive('mask', mask);

// Use your router
app.use(router);

// Install the component library
app.use(MyLibrary);

app.mount('#app');
```
---

## 🧠 Using Utility Functions

```js
import { phoneFormatter, isEmail, validateForm } from 'like-lib-crm';

console.log(phoneFormatter('+5511999998888')); // +55 (11) 99999-8888
console.log(isEmail('test@example.com')); // true

```
---
## 📄 License

[MIT](./LICENSE)

---

> Built with ❤️ by your team.