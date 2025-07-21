import base64DecToArr from '@/utils/base64/base64DecToArr';

describe('base64DecToArr', () => {
  it('deve decodificar Base64 simples "SGVsbG8=" para "Hello"', () => {
    const base64 = 'SGVsbG8='; 
    const expected = [72, 101, 108, 108, 111];
    const result = base64DecToArr(base64);
    expect(Array.from(result)).toEqual(expected);
  });

  it('deve decodificar Base64 "V29ybGQ=" para "World"', () => {
    const base64 = 'V29ybGQ='; 
    const expected = [87, 111, 114, 108, 100];
    const result = base64DecToArr(base64);
    expect(Array.from(result)).toEqual(expected);
  });

  it('deve remover caracteres inválidos antes da conversão', () => {
    const base64 = 'SGVsbG8*!@#='; 
    const expected = [72, 101, 108, 108, 111];
    const result = base64DecToArr(base64);
    expect(Array.from(result)).toEqual(expected);
  });

  it('deve respeitar o nBlocksSize se fornecido', () => {
    const base64 = 'SGVsbG8='; 
    const blockSize = 8;
    const result = base64DecToArr(base64, blockSize);
    expect(result.length).toBe(8);
    expect(Array.from(result.slice(0, 5))).toEqual([72, 101, 108, 108, 111]);
  });

  it('deve retornar Uint8Array vazio para string vazia', () => {
    const result = base64DecToArr('');
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBe(0);
  });
});
