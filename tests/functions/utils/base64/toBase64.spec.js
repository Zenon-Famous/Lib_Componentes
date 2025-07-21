import toBase64 from '@/utils/base64/toBase64';

it('deve rejeitar em caso de erro no FileReader', async () => {
  
  global.FileReader = class {
    constructor() {
      this.error = { message: 'Erro simulado' };
      this.onload = null;
      this.onerror = null;
    }
    readAsDataURL() {
      setTimeout(() => {
        if (this.onerror) this.onerror();
      }, 0);
    }
  };

  await expect(toBase64(new Blob())).rejects.toThrow('Erro simulado');
});
