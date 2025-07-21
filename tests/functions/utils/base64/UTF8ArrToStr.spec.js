import UTF8ArrToStr from '@/utils/base64/UTF8ArrToStr';


function strToUTF8Arr(str) {
  return new TextEncoder().encode(str);
}

describe('UTF8ArrToStr', () => {
  it('deve converter Uint8Array UTF-8 em string corretamente', () => {
    const originalStr = 'Olá, mundo! こんにちは 👋🌍';
    const utf8Array = strToUTF8Arr(originalStr);

    const decodedStr = UTF8ArrToStr(utf8Array);

    expect(decodedStr).toBe(originalStr);
  });

  it('deve retornar string vazia para array vazio', () => {
    const emptyArray = new Uint8Array([]);
    const decodedStr = UTF8ArrToStr(emptyArray);
    expect(decodedStr).toBe('');
  });

  it('deve lidar com caracteres ASCII simples', () => {
    const asciiStr = 'Hello World!';
    const utf8Array = strToUTF8Arr(asciiStr);
    const decodedStr = UTF8ArrToStr(utf8Array);
    expect(decodedStr).toBe(asciiStr);
  });

  it('deve lidar com caracteres multibyte corretamente', () => {
    const multiByteStr = '𝒜𝓁𝓅𝒽𝒶βγδεζηθ'; 
    const utf8Array = strToUTF8Arr(multiByteStr);
    const decodedStr = UTF8ArrToStr(utf8Array);
    expect(decodedStr).toBe(multiByteStr);
  });
});
