/**
 * Vue3 Main script
 */

// Load vue core
import stores from '@/stores';
import { createApp } from 'vue';

import App from './App.vue';

import router from '@/router';

// Load Layout vue.
import '@/assets/main.css';

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(stores);

// Run!
router
  .isReady()
  .then(() => {
    vue.mount('#app');
  })
  .catch(e => console.error(e));
