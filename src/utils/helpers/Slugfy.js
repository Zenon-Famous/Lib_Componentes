export default function Slugfy(item) {
  const characterMap = {
    à: "a", á: "a", ä: "a", â: "a", ã: "a", è: "e", é: "e", ë: "e", ê: "e",
    ì: "i", í: "i", ï: "i", î: "i", ò: "o", ó: "o", ö: "o", ô: "o", õ: "o",
    ù: "u", ú: "u", ü: "u", û: "u", ñ: "n", ç: "c", ß: "ss", æ: "ae", œ: "oe",
    ÿ: "y", ŕ: "r", ś: "s", ń: "n", ṕ: "p", ẃ: "w", ǵ: "g", ǹ: "n", ḿ: "m",
    ǘ: "u", ẍ: "x", ź: "z", č: "c", ď: "d", ě: "e", ň: "n", ř: "r", š: "s",
    ť: "t", ů: "u", ž: "z", ľ: "l", ĺ: "l", ẁ: "w", ǜ: "u", ẗ: "t", ı: "i",
    ć: "c"
  };

  return item
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, (char) => characterMap[char] || "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
