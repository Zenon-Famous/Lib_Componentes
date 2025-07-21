export default function revertSlugfy(item) {
  return item.replace(/-/g, " ");
}