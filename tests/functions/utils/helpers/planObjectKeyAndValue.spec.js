import planObjectKeyAndValue from '@/utils/helpers/planObjectKeyAndValue';

describe('planObjectKeyAndValue', () => {
  it('deve retornar string formatada com chaves e valores do objeto', () => {
    const obj = { nome: 'João', idade: 30, ativo: true };
    expect(planObjectKeyAndValue(obj)).toBe('nome- João, idade- 30, ativo- true');
  });

  it('deve retornar undefined se o parâmetro for undefined ou null', () => {
    expect(planObjectKeyAndValue()).toBeUndefined();
    expect(planObjectKeyAndValue(null)).toBeUndefined();
  });

  it('deve lidar com objeto vazio retornando string vazia', () => {
    expect(planObjectKeyAndValue({})).toBe('');
  });
});
