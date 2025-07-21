import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import PaginatorComponent from '@/components/PaginatorComponent.vue'

describe('PaginatorComponent', () => {
  it('renderiza páginas e emite evento ao clicar', async () => {
    const totalPages = 10
    const value = 5

    const { getByText, emitted } = render(PaginatorComponent, {
      props: { totalPages, value, size: 'lg', color: '#00bfff', activeColor: '#fff' }
    })

    expect(getByText('1')).toBeTruthy()
    const activeBtn = getByText(value.toString())
    expect(activeBtn.classList).toContain('btn-primary')
    expect(getByText(totalPages.toString())).toBeTruthy()

    const prevBtn = getByText((_, node) => node.tagName === 'BUTTON' && node.querySelector('icon-component[icon-name="chevron_left"]'))
    await fireEvent.click(prevBtn)
    expect(emitted()).toHaveProperty('page')
    expect(emitted().page[0]).toEqual([4])

    const nextBtn = getByText((_, node) => node.tagName === 'BUTTON' && node.querySelector('icon-component[icon-name="chevron_right"]'))
    await fireEvent.click(nextBtn)
    expect(emitted().page).toHaveLength(2)
    expect(emitted().page[1]).toEqual([5])

    const page3Btn = getByText('3')
    await fireEvent.click(page3Btn)
    expect(emitted().page).toHaveLength(3)
    expect(emitted().page[2]).toEqual([3])
  })
})
