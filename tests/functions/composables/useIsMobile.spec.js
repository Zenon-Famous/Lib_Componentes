import { describe, it, expect, vi } from 'vitest';
import { nextTick } from 'vue';
import useIsMobile from '@/composables/useIsMobile';
import { mount } from '@vue/test-utils';

describe('useIsMobile', () => {
  let originalInnerWidth;

  // Salva o valor original antes dos testes
  beforeAll(() => {
    originalInnerWidth = window.innerWidth;
  });

  // Restaura após os testes
  afterAll(() => {
    window.innerWidth = originalInnerWidth;
  });

  it('deve definir isMobile como true se a largura for menor que 768px', async () => {
    window.innerWidth = 500;

    const wrapper = mount({
      template: '<div></div>',
      setup() {
        return useIsMobile();
      },
    });

    await nextTick();

    expect(wrapper.vm.isMobile).toBe(true);
  });

  it('deve definir isMobile como false se a largura for maior ou igual a 768px', async () => {
    window.innerWidth = 1024;

    const wrapper = mount({
      template: '<div></div>',
      setup() {
        return useIsMobile();
      },
    });

    await nextTick();

    expect(wrapper.vm.isMobile).toBe(false);
  });

  it('deve reagir a mudanças de tamanho de tela (resize)', async () => {
    const wrapper = mount({
      template: '<div></div>',
      setup() {
        return useIsMobile();
      },
    });

    // Inicial: grande
    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));
    await nextTick();
    expect(wrapper.vm.isMobile).toBe(false);

    // Reduzido: pequeno
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    await nextTick();
    expect(wrapper.vm.isMobile).toBe(true);
  });
});
