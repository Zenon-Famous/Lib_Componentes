import orderBy from '@/utils/helpers/orderBy';

describe('orderBy', () => {
  const items = [
    { StartTime: '2023-01-01T10:00:00Z' },
    { StartTime: '2023-01-01T12:00:00Z' },
    { StartTime: '2023-01-01T09:00:00Z' },
  ];

  it('deve ordenar em ordem decrescente quando type for true', () => {
    const result = orderBy([...items], true);
    expect(result[0].StartTime).toBe('2023-01-01T12:00:00Z');
    expect(result[1].StartTime).toBe('2023-01-01T10:00:00Z');
    expect(result[2].StartTime).toBe('2023-01-01T09:00:00Z');
  });

  it('deve ordenar em ordem crescente quando type for false', () => {
    const result = orderBy([...items], false);
    expect(result[0].StartTime).toBe('2023-01-01T09:00:00Z');
    expect(result[1].StartTime).toBe('2023-01-01T10:00:00Z');
    expect(result[2].StartTime).toBe('2023-01-01T12:00:00Z');
  });

  it('deve manter a ordem se type for undefined ou falsy', () => {
    const result = orderBy([...items], undefined);
    expect(result[0].StartTime).toBe('2023-01-01T09:00:00Z');
  });
});
