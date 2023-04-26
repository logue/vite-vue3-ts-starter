import { ref, computed, type ComputedRef, type Ref } from 'vue';
import { defineStore } from 'pinia';

/** Counter Store */
export default defineStore('counter', () => {
  const count: Ref<number> = ref(0);
  const doubleCount: ComputedRef<number> = computed(() => count.value * 2);
  /** Increment Count */
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
