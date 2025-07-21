import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import FormGroupComponent from '@/components/FormGroup.vue'

const vMaskMock = { mounted() {}, updated() {} }

describe('FormGroupComponent', () => {
  const globalConfig = {
    directives: {
      mask: vMaskMock,
    },
  }

  it('aplica estilos de foco e erro corretamente', async () => {
    const props = {
      id: 'input-id',
      modelValue: '',
      error: false,
      errorBorderColor: 'red',
      errorMsgColor: 'red',
    }

    const { getByRole, rerender } = render(FormGroupComponent, {
      props,
      global: globalConfig,
    })

    const input = getByRole('textbox')

    await fireEvent.focus(input)
    expect(input).toHaveStyle({
      outline: 'none',
      borderColor: '#007bff',
      boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
    })

    await fireEvent.blur(input)
    await nextTick()

    await rerender({ ...props, error: true })

    expect(input).toHaveStyle({ border: '1px solid red' })
  })
})
