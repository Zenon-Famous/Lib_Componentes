import b64ToUint6 from '@/utils/base64/b64ToUint6';

describe('b64ToUint6', () => {
  it('deve converter letras maiúsculas A-Z para 0-25', () => {
    expect(b64ToUint6('A'.charCodeAt(0))).toBe(0);
    expect(b64ToUint6('Z'.charCodeAt(0))).toBe(25);
  });

  it('deve converter letras minúsculas a-z para 26-51', () => {
    expect(b64ToUint6('a'.charCodeAt(0))).toBe(26);
    expect(b64ToUint6('z'.charCodeAt(0))).toBe(51);
  });

  it('deve converter números 0-9 para 52-61', () => {
    expect(b64ToUint6('0'.charCodeAt(0))).toBe(52);
    expect(b64ToUint6('9'.charCodeAt(0))).toBe(61);
  });

  it('deve converter "+" para 62', () => {
    expect(b64ToUint6('+'.charCodeAt(0))).toBe(62);
  });

  it('deve converter "/" para 63', () => {
    expect(b64ToUint6('/'.charCodeAt(0))).toBe(63);
  });

  it('deve retornar 0 para caracteres inválidos', () => {
    expect(b64ToUint6('='.charCodeAt(0))).toBe(0);
    expect(b64ToUint6(' '.charCodeAt(0))).toBe(0);
    expect(b64ToUint6('@'.charCodeAt(0))).toBe(0);
  });
});
