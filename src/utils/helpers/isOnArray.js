export default function isOnArray(arr, field, item) {
  for (let i in arr) {
    if (arr[i][field] === item[field]) {
      return true;
    }
  }
  return false;
}