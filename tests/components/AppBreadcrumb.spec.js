import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import Breadcrumb from '@/components/AppBreadcrumb.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
  { path: '/home', component: { template: '<div>Home</div>' } },
  { path: '/about', component: { template: '<div>About</div>' } },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

describe('Breadcrumb', () => {
  it('renderiza os itens corretamente', async () => {
    const items = [
      { title: 'Home', action: '/home' },
      { title: 'About', action: '/about' },
      { title: 'Current', translate: true },
      { title: 'Static' },
    ]

    const { getByText, queryAllByText } = render(Breadcrumb, {
      global: { plugins: [router] },
      props: { items },
    })

    await router.isReady()

    for (const item of items) {
      expect(getByText(item.title)).toBeTruthy()
    }

    const links = items.filter(i => i.action)
    for (const linkItem of links) {
      const link = getByText(linkItem.title)
      expect(link.closest('a')).toHaveAttribute('href', linkItem.action)
    }

    const chevrons = queryAllByText('chevron_right')
    expect(chevrons.length).toBe(items.length - 1)
  })

  it('aplica estilos personalizados via props', async () => {
    const items = [{ title: 'Home', action: '/home' }]
    const textColor = 'red'
    const linkColor = 'blue'
    const fontSize = '20px'
    const containerStyle = { backgroundColor: 'yellow' }

    const { container, getByText } = render(Breadcrumb, {
      global: { plugins: [router] },
      props: { items, textColor, linkColor, fontSize, containerStyle },
    })

    await router.isReady()

    const wrapper = container.firstChild
    expect(wrapper).toHaveStyle(`background-color: ${containerStyle.backgroundColor}`)

    const item = getByText('Home')
    expect(item).toHaveStyle(`font-size: ${fontSize}`)
    expect(item.closest('a')).toHaveStyle(`color: ${linkColor}`)
  })
})
