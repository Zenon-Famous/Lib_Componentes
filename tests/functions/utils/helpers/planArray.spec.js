import planArray from '@/utils/helpers/planArray';

describe('planArray', () => {
  it('deve juntar os elementos do array separados por espaço', () => {
    expect(planArray(['a', 'b', 'c'])).toBe('a b c');
  });

  it('deve retornar string vazia se o array estiver vazio', () => {
    expect(planArray([])).toBe('');
  });

  it('deve converter elementos não string em string e juntar', () => {
    expect(planArray([1, true, null])).toBe('1 true ');
  });
});
