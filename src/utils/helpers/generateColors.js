export default function generateColors(arr, theme, darkTheme = [], whiteTheme = []) {
  const defaultDarkTheme = [
    "#00008B", "#00BFFF", "#8A2BE2", "#4169E1", "#483D8B", "#20B2AA",
  ];
  const defaultWhiteTheme = [
    "#0000CD", "#00FF00", "#FF0000", "#FF8C00", "#FFFF00", "#E0FFFF",
  ];

  const useDark = theme === "darks" || theme === "autos";
  const palette = useDark
    ? (darkTheme.length ? darkTheme : defaultDarkTheme)
    : (whiteTheme.length ? whiteTheme : defaultWhiteTheme);

  return arr.map((_, i) => palette[i % palette.length]);
}
