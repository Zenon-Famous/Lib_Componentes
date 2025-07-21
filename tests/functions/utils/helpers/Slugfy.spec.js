import Slugfy from '@/utils/helpers/Slugfy';

describe('Slugfy', () => {
  it('deve converter string para slug corretamente', () => {
    expect(Slugfy('Olá Mundo')).toBe('ola-mundo');
    expect(Slugfy('São Paulo é ótimo')).toBe('sao-paulo-e-otimo');
    expect(Slugfy('Café com açúcar')).toBe('cafe-com-acucar');
    expect(Slugfy('Título com -- múltiplos  espaços')).toBe('titulo-com-multiplos-espacos');
  });

  it('deve remover caracteres especiais não mapeados', () => {
    expect(Slugfy('teste@#$%')).toBe('teste');
    expect(Slugfy('Ação!')).toBe('acao');
  });

  it('deve lidar com strings vazias', () => {
    expect(Slugfy('')).toBe('');
  });
});
