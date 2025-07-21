import phone from '@/utils/formatter/phoneFormatter';

describe('phone formatter', () => {
  it('deve formatar número válido com DDD e número de 9 dígitos', () => {
    const input = '+5511999998888';
    const expected = '+55 (11) 99999-8888';
    expect(phone(input)).toBe(expected);
  });

  it('deve formatar número válido com DDD e número de 8 dígitos', () => {
    const input = '+551132457890';
    const expected = '+55 (11) 3245-7890';
    expect(phone(input)).toBe(expected);
  });

  it('deve retornar o valor original se não bater com o padrão esperado', () => {
    const input = '123456789';
    expect(phone(input)).toBe(input);
  });

  it('deve retornar o valor original se for string vazia', () => {
    expect(phone('')).toBe('');
  });

  it('deve retornar o valor original se for null', () => {
    expect(phone(null)).toBe(null);
  });

  it('deve retornar o valor original se for undefined', () => {
    expect(phone(undefined)).toBe(undefined);
  });
});
