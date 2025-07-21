import { describe, it, expect } from 'vitest';
import searchIguals from '@/composables/useSearch/searchIguals';

describe('searchIguals', () => {
  const dataMock = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Bob', idade: 25 },
    { nome: 'Charlie', idade: 30 },
  ];

  it('retorna os registros que correspondem exatamente ao termo', () => {
    const result = searchIguals('idade', dataMock, 30);

    expect(result.error).toBeNull();
    expect(result.results.length).toBe(2);
    expect(result.results).toEqual([
      { nome: 'Alice', idade: 30 },
      { nome: 'Charlie', idade: 30 },
    ]);
  });

  it('retorna array vazio se não houver correspondência', () => {
    const result = searchIguals('nome', dataMock, 'Daniel');

    expect(result.error).toBeNull();
    expect(result.results).toEqual([]);
    expect(result.totalRecords).toBe(0);
  });

  it('compara usando == e não === (coerção de tipo)', () => {
    const result = searchIguals('idade', dataMock, '25');

    expect(result.results.length).toBe(1);
    expect(result.results[0].nome).toBe('Bob');
  });
});
