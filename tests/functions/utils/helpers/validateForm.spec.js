import validateForm from '@/utils/helpers/validateForm';

describe('validateForm', () => {
  const fields = ['name', 'email', 'tags'];

  it('retorna o nome do campo quando campo obrigatório está vazio', () => {
    expect(validateForm(fields, { name: '', email: 'user@example.com', tags: ['tag'] })).toBe('name');
    expect(validateForm(fields, { name: 'User', email: '', tags: ['tag'] })).toBe('email');
    expect(validateForm(fields, { name: 'User', email: 'user@example.com', tags: [] })).toBe('tags');
    expect(validateForm(fields, { name: 'User', email: null, tags: ['tag'] })).toBe('email');
    expect(validateForm(fields, { name: undefined, email: 'user@example.com', tags: ['tag'] })).toBe('name');
  });

  it('retorna o nome do campo quando email é inválido', () => {
    expect(validateForm(fields, { name: 'User', email: 'invalid-email', tags: ['tag'] })).toBe('email');
    expect(validateForm(fields, { name: 'User', email: 'user@domain', tags: ['tag'] })).toBe('email');
    expect(validateForm(fields, { name: 'User', email: 'user@domain.', tags: ['tag'] })).toBe('email');
  });

  it('retorna null quando todos os campos são válidos', () => {
    expect(validateForm(fields, { name: 'User', email: 'user@example.com', tags: ['tag'] })).toBeNull();
    expect(validateForm(fields, { name: 'John Doe', email: 'john.doe@mail.com', tags: ['tag1', 'tag2'] })).toBeNull();
  });
});
