import formFields from '@/utils/helpers/formFields'

describe('formFields', () => {
  it('deve criar objeto form com campos vazios e errors false se initial não fornecido', () => {
    const fields = ['name', 'email', 'age'];
    const result = formFields(fields);

    expect(result).toEqual({
      form: { name: '', email: '', age: '' },
      errors: { name: false, email: false, age: false },
      loading: false,
    });
  });

  it('deve usar valores iniciais do objeto initial quando fornecido', () => {
    const fields = ['name', 'email', 'age'];
    const initial = { name: 'John', email: 'john@example.com' };
    const result = formFields(fields, initial);

    expect(result).toEqual({
      form: { name: 'John', email: 'john@example.com', age: '' },
      errors: { name: false, email: false, age: false },
      loading: false,
    });
  });

  it('deve tratar initial como vazio se undefined', () => {
    const fields = ['username'];
    const result = formFields(fields, undefined);

    expect(result).toEqual({
      form: { username: '' },
      errors: { username: false },
      loading: false,
    });
  });

  it('deve funcionar com fields vazio', () => {
    const result = formFields([]);

    expect(result).toEqual({
      form: {},
      errors: {},
      loading: false,
    });
  });
});
