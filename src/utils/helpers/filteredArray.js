export default function filteredArray(arr1, item) {
  const filteredList = arr1.filter((c) => c.id != item.id);
  return filteredList;
}