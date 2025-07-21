import isOnArray from '@/utils/helpers/isOnArray';

describe('isOnArray', () => {
  const arr = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  it('deve retornar true se o item estiver presente no array com o mesmo valor do campo', () => {
    expect(isOnArray(arr, 'id', { id: 2 })).toBe(true);
    expect(isOnArray(arr, 'name', { name: 'Charlie' })).toBe(true);
  });

  it('deve retornar false se o item não estiver presente no array', () => {
    expect(isOnArray(arr, 'id', { id: 4 })).toBe(false);
    expect(isOnArray(arr, 'name', { name: 'Daniel' })).toBe(false);
  });

  it('deve retornar false se o array estiver vazio', () => {
    expect(isOnArray([], 'id', { id: 1 })).toBe(false);
  });

  it('deve comparar somente o campo especificado', () => {
    expect(isOnArray(arr, 'id', { id: 1, name: 'OutraCoisa' })).toBe(true);
    expect(isOnArray(arr, 'name', { name: 'Alice', id: 99 })).toBe(true);
  });
});
