import { describe, it, expect } from 'vitest';
import searchContains from '@/composables/useSearch/searchContains';

describe('searchContains', () => {
  const dataMock = [
    { nome: 'Alice', cidade: 'São Paulo' },
    { nome: 'Bob', cidade: 'Porto Alegre' },
    { nome: 'Carlos', cidade: 'Curitiba' },
    { nome: 'Daniela', cidade: null },
    { nome: 'Eva', cidade: undefined },
  ];

  it('retorna registros cujo valor contém o termo', () => {
    const result = searchContains('cidade', dataMock, 'Paulo');
    expect(result.error).toBeNull();
    expect(result.results.length).toBe(1);
    expect(result.results[0].nome).toBe('Alice');
  });

  it('retorna registros parcialmente correspondentes', () => {
    const result = searchContains('cidade', dataMock, 'Porto');
    expect(result.results.length).toBe(1);
    expect(result.results[0].nome).toBe('Bob');
  });

  it('retorna vazio se nenhum valor contiver o termo', () => {
    const result = searchContains('cidade', dataMock, 'Florianópolis');
    expect(result.results).toEqual([]);
    expect(result.totalRecords).toBe(0);
  });

  it('ignora valores null ou undefined', () => {
    const result = searchContains('cidade', dataMock, 'Curitiba');
    expect(result.results.length).toBe(1);
    expect(result.results[0].nome).toBe('Carlos');
  });

  it('converte valores para string antes de buscar', () => {
    const data = [
      { id: 123 },
      { id: '456' },
      { id: 789 },
    ];
    const result = searchContains('id', data, '23');
    expect(result.results.length).toBe(1);
    expect(result.results[0].id).toBe(123);
  });
});
