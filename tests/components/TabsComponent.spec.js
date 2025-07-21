import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import TabsComponent from '@/profile/resume/TabsComponent.vue'

describe('TabsComponent', () => {
  const defaultProps = {
    tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
    activeTab: 'Tab 2',
    orientation: 'horizontal',
    tabColor: '#aaa',
    activeTabColor: '#000',
    borderColor: 'red',
    activeBorderColor: 'blue',
  }

  it('renderiza todas as abas corretamente', () => {
    const { getByText } = render(TabsComponent, { props: defaultProps })

    defaultProps.tabs.forEach((tab) => {
      expect(getByText(tab)).toBeTruthy()
    })
  })

  it('aplica estilo de aba ativa corretamente', () => {
    const { getByText } = render(TabsComponent, { props: defaultProps })
    const activeButton = getByText('Tab 2')

    expect(activeButton).toHaveStyle(`color: ${defaultProps.activeTabColor}`)
    expect(activeButton).toHaveStyle(`border-bottom: 3px solid ${defaultProps.activeBorderColor}`)
  })

  it('aplica estilo de abas inativas corretamente', () => {
    const { getByText } = render(TabsComponent, { props: defaultProps })
    const inactiveButton = getByText('Tab 1')

    expect(inactiveButton).toHaveStyle(`color: ${defaultProps.tabColor}`)
    expect(inactiveButton).toHaveStyle(`border-bottom: 3px solid ${defaultProps.borderColor}`)
  })

  it('emite evento changeTab ao clicar em uma aba', async () => {
    const { getByText, emitted } = render(TabsComponent, { props: defaultProps })
    const tabToClick = getByText('Tab 1')

    await fireEvent.click(tabToClick)

    expect(emitted().changeTab).toBeTruthy()
    expect(emitted().changeTab[0]).toEqual(['Tab 1'])
  })

  it('usa classe flex-md-column quando orientação é vertical', () => {
    const { container } = render(TabsComponent, {
      props: { ...defaultProps, orientation: 'vertical' },
    })

    const wrapper = container.querySelector('.tabs-component')
    expect(wrapper.classList.contains('flex-md-column')).toBe(true)
  })

  it('usa classe flex-row quando orientação é horizontal', () => {
    const { container } = render(TabsComponent, {
      props: { ...defaultProps, orientation: 'horizontal' },
    })

    const wrapper = container.querySelector('.tabs-component')
    expect(wrapper.classList.contains('flex-row')).toBe(true)
  })
})
