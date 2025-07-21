import { describe, it, expect } from 'vitest';
import searchDateIgual from '@/composables/useSearch/searchDateIgual';

describe('searchDateIgual', () => {
  const dataMock = [
    { nome: 'Alice', nascimento: '2024-01-15T10:30:00Z' },
    { nome: 'Bob', nascimento: '2024-01-15T00:00:00Z' },
    { nome: 'Charlie', nascimento: '2023-12-31T23:59:59Z' },
  ];

  it('retorna os registros com data igual ao termo (mesmo dia)', () => {
    const result = searchDateIgual('nascimento', dataMock, '2024/01/15');

    expect(result.error).toBeNull();
    expect(result.results.length).toBe(2);
    expect(result.results[0].nome).toBe('Alice');
    expect(result.results[1].nome).toBe('Bob');
    expect(result.totalRecords).toBe(2);
  });

  it('retorna vazio se nenhuma data bater com o termo', () => {
    const result = searchDateIgual('nascimento', dataMock, '2024/02/01');

    expect(result.error).toBeNull();
    expect(result.results).toEqual([]);
    expect(result.totalRecords).toBe(0);
  });

  it('retorna erro se a data for inválida', () => {
    const result = searchDateIgual('nascimento', dataMock, 'data inválida');

    expect(result.error).toBe('Data inválida');
    expect(result.results).toEqual([]);
    expect(result.page).toBe(1);
    expect(result.totalRecords).toBe(0);
  });

  it('ignora hora, minuto e segundo ao comparar datas', () => {
    const dataWithTime = [
      { evento: 'Evento', data: '2024-07-21T23:59:59Z' },
    ];
    const result = searchDateIgual('data', dataWithTime, '2024/07/21');

    expect(result.error).toBeNull();
    expect(result.results.length).toBe(1);
    expect(result.results[0].evento).toBe('Evento');
  });
});
