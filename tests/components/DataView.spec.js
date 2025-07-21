import { render, fireEvent, within } from '@testing-library/vue'
import { describe, it, expect, vi } from 'vitest'
import DataView from '@/components/DataView.vue'

describe('DataView', () => {
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Nome', field: 'name' },
    { title: 'Idade', field: 'age' },
  ]

  const data = [
    { id: 1, name: 'João', age: 30 },
    { id: 2, name: 'Maria', age: 25 },
  ]

  it('renderiza tabela com colunas e dados', () => {
    const { getByText, getByRole } = render(DataView, {
      props: { columns, data, totalPages: 3, actualPage: 1 },
    })

    columns.forEach(col => {
      expect(getByText(col.title)).toBeTruthy()
    })

    const table = getByRole('table')
    const tableWithin = within(table)

    data.forEach(row => {
      expect(tableWithin.getByText(String(row.id))).toBeTruthy()
      expect(tableWithin.getByText(row.name)).toBeTruthy()
      expect(tableWithin.getByText(String(row.age))).toBeTruthy()
    })
  })

  it('renderiza botões de paginação e emite eventos', async () => {
    const changePageMock = vi.fn()
    const itemClickMock = vi.fn()

    const { getByRole, getAllByRole } = render(DataView, {
      props: {
        columns,
        data,
        totalPages: 3,
        actualPage: 1,
        actions: [
          {
            name: 'Delete',
            icon: 'delete',
            action: (row) => itemClickMock(row),
          },
        ],
      },
      attrs: {
        onChangePage: changePageMock,
        onItemClick: itemClickMock,
      },
    })

    const pagination = getByRole('navigation')
    const page2 = within(pagination).getByText('2')
    await fireEvent.click(page2)
    expect(changePageMock).toHaveBeenCalledWith(2)

    const table = getByRole('table')
    const firstCell = table.querySelector('tbody td')
    await fireEvent.click(firstCell)
    expect(itemClickMock).toHaveBeenCalledWith(data[0])

    const actionBtn = getAllByRole('button').find(btn => btn.title === 'Delete')
    await fireEvent.click(actionBtn)
    expect(itemClickMock).toHaveBeenCalledWith(data[0])
  })

  it('exibe loading quando loading for true', () => {
    const { getByText, queryByRole } = render(DataView, {
      props: { columns, data, loading: true },
    })

    expect(getByText('Loading...')).toBeTruthy()
    expect(queryByRole('table')).toBeNull()
  })
})
