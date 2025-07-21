import isUrl from '@/utils/helpers/isUrl';

describe('isUrl', () => {
  it('deve retornar true para URLs válidas', () => {
    expect(isUrl('http://example.com')).toBe(true);
    expect(isUrl('https://example.com')).toBe(true);
    expect(isUrl('ftp://example.com/file.txt')).toBe(true);
    expect(isUrl('www.example.com')).toBe(true);
    expect(isUrl('WWW.EXAMPLE.COM')).toBe(true);
    expect(isUrl('http://sub.domain.example.com/path?query=123#hash')).toBe(true);
  });

  it('deve retornar false para strings que não são URLs', () => {
    expect(isUrl('example')).toBe(false);
    expect(isUrl('example.com without protocol')).toBe(false);
    expect(isUrl('htp://example.com')).toBe(false);
    expect(isUrl('http:/example.com')).toBe(false);
    expect(isUrl('')).toBe(false);
    expect(isUrl('http://')).toBe(false);
    expect(isUrl('ftp:/example.com')).toBe(false);
  });
});
