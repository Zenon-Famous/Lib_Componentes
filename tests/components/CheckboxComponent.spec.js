import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import CheckboxComponent from '@/profile/CheckboxComponent.vue'

describe('CheckboxComponent', () => {
  it('renderiza com borda da cor especificada', () => {
    const { container } = render(CheckboxComponent, {
      props: {
        color: '#ff0000',
        isActive: false,
      },
    })

    const checkbox = container.querySelector('.checkbox-component')
    expect(checkbox).toHaveStyle('border: 1px solid #ff0000')
    expect(checkbox).not.toHaveStyle('background-color: #ff0000')
  })

  it('renderiza ícone quando ativo', () => {
    const { container } = render(CheckboxComponent, {
      props: {
        isActive: true,
        color: '#00ff00',
      },
    })

    const checkbox = container.querySelector('.checkbox-component')
    const icon = container.querySelector('.icon-check')

    expect(icon).toBeTruthy()
    expect(icon.style.display).not.toBe('none') // visível
    expect(checkbox).toHaveStyle('background-color: #00ff00')
  })

  it('não mostra ícone quando inativo', () => {
    const { container } = render(CheckboxComponent, {
      props: {
        isActive: false,
        color: '#123456',
      },
    })

    const icon = container.querySelector('.icon-check')
    expect(icon).toBeTruthy()
    expect(icon.style.display).toBe('none') // invisível
  })
})
