import { mount } from '@vue/test-utils';

import { describe, expect, it } from 'vite-plus/test';

import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello Vitest'
      }
    });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
