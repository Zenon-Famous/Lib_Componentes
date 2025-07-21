import strToUTF8Arr from '@/utils/base64/strToUTF8Arr.js';

describe('strToUTF8Arr', () => {
  it('deve converter string ASCII simples para UTF-8 corretamente', () => {
    const str = 'Hello';
    const result = strToUTF8Arr(str);
    const expected = new Uint8Array([72, 101, 108, 108, 111]);
    expect(result).toEqual(expected);
  });

  it('deve converter caracteres com acento corretamente', () => {
    const str = 'Olá'; 
    const result = strToUTF8Arr(str);
    const expected = new Uint8Array([79, 108, 195, 161]);
    expect(result).toEqual(expected);
  });

  it('deve converter emoji corretamente', () => { 
    const str = '😊';
    const result = strToUTF8Arr(str);
    const expected = new Uint8Array([240, 159, 152, 138]);
    expect(result).toEqual(expected);
  });

  it('deve converter string vazia para Uint8Array vazio', () => {
    const str = '';
    const result = strToUTF8Arr(str);
    const expected = new Uint8Array([]);
    expect(result).toEqual(expected);
  });
});
