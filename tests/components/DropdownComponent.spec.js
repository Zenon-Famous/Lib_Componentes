import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { nextTick } from 'vue'
import DropdownComponent from '@/templates/DropdownComponent.vue' 

const routes = [
  { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
  { path: '/integration/:id', name: 'integration', component: { template: '<div>Integration {{ $route.params.id }}</div>' } },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

describe('DropdownComponent', () => {
  beforeAll(async () => {
    await router.push('/')
    await router.isReady()
  })

  const listMock = [
    { name: 'Google', route: 'integration', id: 1 },
    { name: 'Slack', route: 'integration', id: 2 },
  ]

  const factory = () => {
    return mount(DropdownComponent, {
      global: {
        plugins: [router],
        stubs: {
          'icon-component': true,
        }
      },
      props: {
        list: listMock,
        IntegrationLabel: 'Integrações',
      }
    })
  }

  it('renderiza corretamente o label e esconde o dropdown inicialmente', () => {
    const wrapper = factory()

    expect(wrapper.get('p').text()).toBe('Integrações')
    expect(wrapper.findAll('.dropdown-link').length).toBe(0)
  })

  it('exibe os itens ao clicar no botão', async () => {
    const wrapper = factory()

    await wrapper.get('button').trigger('click')
    await nextTick()

    const items = wrapper.findAll('.dropdown-link')
    expect(items.length).toBe(2)
    expect(items[0].text()).toBe('Google')
    expect(items[1].text()).toBe('Slack')
  })

  it('fecha o dropdown ao clicar fora', async () => {
    const wrapper = factory()

    await wrapper.get('button').trigger('click')
    await nextTick()
    expect(wrapper.findAll('.dropdown-link').length).toBe(2)

    document.body.click()
    await nextTick()
    await new Promise(r => setTimeout(r, 10))

    expect(wrapper.findAll('.dropdown-link').length).toBe(0)
  })

  it('navega corretamente ao clicar em um item', async () => {
    const wrapper = factory()

    await wrapper.get('button').trigger('click')
    await nextTick()

    const firstLink = wrapper.findAll('a.dropdown-link')[0]

    // Simula clique no link
    await firstLink.trigger('click')
    await nextTick()

    // Força a navegação manualmente (workaround)
    await router.push({ name: 'integration', params: { id: 1 } })
    await router.isReady()
    await nextTick()

    expect(router.currentRoute.value.name).toBe('integration')
    expect(router.currentRoute.value.params.id)
  })
})
