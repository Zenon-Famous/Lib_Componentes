import ConversationTime from '@/utils/timeFormatter/ConversationTime';

describe('ConversationTime', () => {

  function createPastDate(secondsAgo) {
    return new Date(Date.now() - secondsAgo * 1000);
  }

  it('retorna HH:mm:ss quando a diferença é maior que uma hora', () => {
    const threeHoursAgo = createPastDate(3 * 3600 + 15 * 60 + 42); 
    const result = ConversationTime(threeHoursAgo);
    expect(result).toBe('03:15:42');
  });

  it('retorna mm:ss quando a diferença é menor que uma hora', () => {
    const tenMinutesAgo = createPastDate(10 * 60 + 5); 
    const result = ConversationTime(tenMinutesAgo);
    expect(result).toBe('10:05');
  });

  it('retorna mm:ss quando a diferença é só segundos', () => {
    const thirtySecondsAgo = createPastDate(30);
    const result = ConversationTime(thirtySecondsAgo);
    expect(result).toBe('00:30');
  });

  it('retorna string vazia e não lança erro se a entrada for inválida', () => {
    const result = ConversationTime(null);
    expect(result).toBe('');
  });
});
