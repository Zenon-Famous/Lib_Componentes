import generateColors from '@/utils/helpers/generateColors'

describe('generateColors', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  it('deve usar defaultDarkTheme quando theme é "darks" e darkTheme vazio', () => {
    const colors = generateColors(arr, 'darks', [], []);
    expect(colors).toEqual([
      "#00008B", "#00BFFF", "#8A2BE2", "#4169E1", "#483D8B", "#20B2AA", "#00008B"
    ]);
  });

  it('deve usar defaultWhiteTheme quando theme não é "darks" nem "autos" e whiteTheme vazio', () => {
    const colors = generateColors(arr, 'light', [], []);
    expect(colors).toEqual([
      "#0000CD", "#00FF00", "#FF0000", "#FF8C00", "#FFFF00", "#E0FFFF", "#0000CD"
    ]);
  });

  it('deve usar darkTheme fornecido quando theme é "darks"', () => {
    const darkCustom = ["#111", "#222"];
    const colors = generateColors(arr, 'darks', darkCustom, []);
    expect(colors).toEqual([
      "#111", "#222", "#111", "#222", "#111", "#222", "#111"
    ]);
  });

  it('deve usar whiteTheme fornecido quando theme é "light"', () => {
    const whiteCustom = ["#aaa", "#bbb"];
    const colors = generateColors(arr, 'light', [], whiteCustom);
    expect(colors).toEqual([
      "#aaa", "#bbb", "#aaa", "#bbb", "#aaa", "#bbb", "#aaa"
    ]);
  });

  it('deve usar defaultDarkTheme quando theme é "autos" e darkTheme vazio', () => {
    const colors = generateColors(arr, 'autos', [], []);
    expect(colors).toEqual([
      "#00008B", "#00BFFF", "#8A2BE2", "#4169E1", "#483D8B", "#20B2AA", "#00008B"
    ]);
  });
});
