import { describe, it, expect } from 'vitest';
import searchBiggerThen from '@/composables/useSearch/searchBiggerThen';

describe('searchBiggerThen', () => {
  const dataMock = [
    { date: '2023-01-01' },
    { date: '2023-05-10' },
    { date: '2024-02-20' },
    { date: 'invalid-date' },
    { date: '' },
  ];

  it('deve retornar erro para data inválida', () => {
    const result = searchBiggerThen('date', dataMock, 'invalid/12/34');
    expect(result.error).toBe('Data inválida');
    expect(result.results).toEqual([]);
    expect(result.totalRecords).toBe(0);
  });

  it('deve retornar registros com data maior que o termo', () => {
    const result = searchBiggerThen('date', dataMock, '2023/04/01');
    expect(result.error).toBeNull();
    expect(result.results.length).toBe(2);
    expect(result.results).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ date: '2023-05-10' }),
        expect.objectContaining({ date: '2024-02-20' }),
      ])
    );
  });

  it('deve ignorar registros com datas inválidas', () => {
    const result = searchBiggerThen('date', dataMock, '2023/01/01');
    expect(result.results.find(r => r.date === 'invalid-date')).toBeUndefined();
    expect(result.results.find(r => r.date === '')).toBeUndefined();
  });

  it('deve retornar resultados vazios quando nenhuma data for maior', () => {
    const result = searchBiggerThen('date', dataMock, '2025/01/01');
    expect(result.results).toEqual([]);
    expect(result.totalRecords).toBe(0);
  });
});
