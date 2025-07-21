import { describe, it, expect } from 'vitest';
import month3year4 from '@/utils/formatter/monthYearFormatter';

describe('month3year4', () => {
  it('deve formatar corretamente datas válidas', () => {
    expect(month3year4('2024-07-21')).toBe('JUL/2024');
    expect(month3year4('2020-01-15')).toBe('JAN/2020');
    expect(month3year4('1999-12-31')).toBe('DEZ/1999');
  });

  it('deve retornar o valor original para datas inválidas', () => {
    expect(month3year4('data inválida')).toBe('data inválida');
    expect(month3year4(null)).toBe(null);
    expect(month3year4(undefined)).toBe(undefined);
    expect(month3year4('')).toBe('');
  });

  it('deve funcionar com objetos Date diretamente', () => {
    const date = new Date(2023, 5, 10); 
    expect(month3year4(date)).toBe('JUN/2023');
  });
});
