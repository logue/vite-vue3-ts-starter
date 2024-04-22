/**
 * Vue3 Main script
 */

// Load vue core
import { createApp } from 'vue';

import App from './App.vue';

import router from '@/router';
import store from '@/store';

// Load Layout vue.
import '@/assets/main.css';

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);

// Run!
router
  .isReady()
  .then(() => vue.mount('#app'))
  .catch(e => console.error(e));
