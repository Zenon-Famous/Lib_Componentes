import { describe, it, expect } from 'vitest';
import searchLessThen from '@/composables/useSearch/searchLessThen';

describe('searchLessThen', () => {
  const dataMock = [
    { date: '2023/05/01' },
    { date: '2024/01/15' },
    { date: '2025/07/20' },
    { date: 'invalid' }, // entrada inválida
  ];

  it('deve retornar objetos com data menor que o termo', () => {
    const result = searchLessThen('date', dataMock, '2024/12/31');

    expect(result.error).toBeNull();
    expect(result.results.length).toBe(2);
    expect(result.results).toEqual([
      { date: '2023/05/01' },
      { date: '2024/01/15' },
    ]);
  });

  it('deve retornar array vazio se nenhuma data for menor', () => {
    const result = searchLessThen('date', dataMock, '2020/01/01');

    expect(result.results).toEqual([]);
    expect(result.totalRecords).toBe(0);
  });

  it('deve ignorar objetos com datas inválidas', () => {
    const result = searchLessThen('date', dataMock, '2026/01/01');

    expect(result.results.length).toBe(3); // ignora apenas a inválida
    expect(result.results).toContainEqual({ date: '2023/05/01' });
  });

  it('deve retornar erro para termo de data inválido', () => {
    const result = searchLessThen('date', dataMock, 'abc');

    expect(result.error).toBe('Data inválida');
    expect(result.results).toEqual([]);
    expect(result.totalRecords).toBe(0);
  });
});
