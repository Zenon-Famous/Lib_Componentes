export default function isUrl(str) {
  const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return pattern.test(str) || /^www\./i.test(str);
}