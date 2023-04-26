import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia, type Pinia } from 'pinia';

// Pinia Stores
import useCounter from '@/stores/CounterStore';

/** Pinia Store */
const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

export { useCounter };
