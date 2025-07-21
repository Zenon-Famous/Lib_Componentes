import regexTest from '@/utils/helpers/regexTest';

describe('regexTest', () => {
  it('deve retornar true quando o regex casar com o campo', () => {
    const regex = /^[a-z]+$/;
    expect(regexTest(regex, 'abc')).toBe(true);
  });

  it('deve retornar false quando o regex não casar com o campo', () => {
    const regex = /^[0-9]+$/;
    expect(regexTest(regex, 'abc')).toBe(false);
  });

  it('deve funcionar com strings vazias', () => {
    const regex = /^$/;
    expect(regexTest(regex, '')).toBe(true);
  });
});
