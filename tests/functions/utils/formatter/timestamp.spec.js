import timestamp from '@/utils/formatter/timestampFormatter';

describe('timestamp formatter', () => {
  it('deve formatar uma string datetime válida corretamente', () => {
    const input = '2024-12-31T23:45:00';
    const result = timestamp(input);
    expect(result).toMatch(/^31\/12\/2024, 23:45$/);
  });

  it('deve formatar uma data do tipo Date corretamente', () => {
    const input = new Date('2023-05-10T08:30:00');
    const result = timestamp(input);
    expect(result).toMatch(/^10\/05\/2023, 08:30$/);
  });

  it('deve retornar o valor original se a data for inválida (string aleatória)', () => {
    const input = 'not-a-date';
    expect(timestamp(input)).toBe('not-a-date');
  });

  it('deve retornar o valor original se for null', () => {
    expect(timestamp(null)).toBe(null);
  });

  it('deve retornar o valor original se for undefined', () => {
    expect(timestamp(undefined)).toBe(undefined);
  });

  it('deve funcionar com timestamp numérico', () => {
    const input = 1672531200000; 
    const result = timestamp(input);
    expect(result).toMatch(/^31\/12\/2022, 21:00|01\/01\/2023, 00:00$/); 
  });
});
