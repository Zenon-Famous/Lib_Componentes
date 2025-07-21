import revertSlugfy from '@/utils/helpers/revertSlugfy';

describe('revertSlugfy', () => {
  it('deve substituir todos os hífens por espaços', () => {
    expect(revertSlugfy('hello-world')).toBe('hello world');
    expect(revertSlugfy('slug-with-multiple-hyphens')).toBe('slug with multiple hyphens');
  });

  it('deve retornar a string inalterada se não houver hífens', () => {
    expect(revertSlugfy('nospace')).toBe('nospace');
    expect(revertSlugfy('')).toBe('');
  });
});
