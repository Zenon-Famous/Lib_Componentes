import base64EncArr from '@/utils/base64/base64EncArr';
import uint6ToB64 from '@/utils/base64/uint6ToB64'; 

describe('base64EncArr', () => {
  it('deve codificar corretamente Uint8Array para Base64', () => {
    // "Hello" em Uint8Array
    const input = new Uint8Array([72, 101, 108, 108, 111]);
    
    // Base64 padrão para "Hello"
    const expected = 'SGVsbG8=';

    const result = base64EncArr(input);

    expect(result).toBe(expected);
  });

  it('deve codificar Uint8Array vazio para string vazia', () => {
    const input = new Uint8Array([]);
    const result = base64EncArr(input);
    expect(result).toBe('');
  });

  it('deve adicionar padding correto para entradas com comprimento não múltiplo de 3', () => {
    
    const input = new Uint8Array([72, 105]);
    const expected = 'SGk=';
    const result = base64EncArr(input);
    expect(result).toBe(expected);
  });
});
