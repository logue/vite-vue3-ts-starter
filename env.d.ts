/// <reference types="vite/client" />

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, never>,
    Record<string, never>,
    // oxlint-disable-next-line typescript/no-explicit-any
    any
  >;
  export default component;
}

declare const __APP_VERSION__: string;
declare const __BUILD_DATE__: string;
