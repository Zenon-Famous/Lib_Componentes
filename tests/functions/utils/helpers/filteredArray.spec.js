import filteredArray from '@/utils/helpers/filteredArray'

describe('filteredArray', () => {
  it('remove o item do array baseado no id', () => {
    const arrayOriginal = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];

    const itemParaRemover = { id: 2 };

    const resultado = filteredArray(arrayOriginal, itemParaRemover);

    expect(resultado).toEqual([
      { id: 1, name: 'Item 1' },
      { id: 3, name: 'Item 3' }
    ]);

    // Certificar que o array original não foi alterado
    expect(arrayOriginal.length).toBe(3);
  });

  it('não altera o array se o item não for encontrado', () => {
    const arrayOriginal = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];

    const itemParaRemover = { id: 99 };

    const resultado = filteredArray(arrayOriginal, itemParaRemover);

    expect(resultado).toEqual(arrayOriginal);
  });

  it('retorna array vazio se array original for vazio', () => {
    const resultado = filteredArray([], { id: 1 });
    expect(resultado).toEqual([]);
  });
});
