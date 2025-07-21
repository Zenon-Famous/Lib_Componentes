import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import CardHome from '@/home/CardHome.vue'
import { createRouter, createMemoryHistory } from 'vue-router'


const DummyIcon = {
  template: '<svg data-testid="dummy-icon"></svg>',
}

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/teste', component: { template: '<div>Teste</div>' } }],
})

describe('CardHome.vue', () => {
  const itemBase = {
    title: 'Meu Título',
    route: '/teste',
  }

  it('renderiza com ícone como string (classe)', async () => {
    const { getByText, container } = render(CardHome, {
      global: { plugins: [router] },
      props: {
        item: { ...itemBase, icon: 'fas fa-star' },
        orientation: 'horizontal',
      },
    })

    await router.isReady()

    const title = getByText('Meu Título')
    expect(title).toBeTruthy()

    const icon = container.querySelector('i.fas.fa-star')
    expect(icon).toBeTruthy()

    const card = container.querySelector('.card-home-component')
    expect(card.classList.contains('flex-row')).toBe(true)
  })

  it('renderiza com ícone como componente', async () => {
    const { getByTestId, container } = render(CardHome, {
      global: { plugins: [router] },
      props: {
        item: { ...itemBase, icon: DummyIcon },
        orientation: 'vertical',
      },
    })

    await router.isReady()

    const icon = getByTestId('dummy-icon')
    expect(icon).toBeTruthy()

    const card = container.querySelector('.card-home-component')
    expect(card.classList.contains('flex-column')).toBe(true)
  })

  it('aplica estilos personalizados', async () => {
    const props = {
      item: { ...itemBase, icon: 'fa fa-test' },
      backgroundColor: 'red',
      iconBackground: 'blue',
      iconColor: 'yellow',
      titleColor: 'green',
      fontSize: 22,
    }

    const { container, getByText } = render(CardHome, {
      global: { plugins: [router] },
      props,
    })

    await router.isReady()

    const link = container.querySelector('.card-home-component')
    expect(link).toHaveStyle({ background: props.backgroundColor })

    const icon = container.querySelector('.icon-container')
    expect(icon).toHaveStyle({ background: props.iconBackground })

    const title = getByText('Meu Título')
    expect(title).toHaveStyle({
      color: props.titleColor,
      fontSize: props.fontSize + 'px',
    })

    const iconEl = container.querySelector('i')
    expect(iconEl).toHaveStyle({ color: props.iconColor })
  })
})
