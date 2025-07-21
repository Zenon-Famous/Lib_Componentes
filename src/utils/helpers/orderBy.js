export default function orderBy(item, type) {
  if (type) {
    return item.sort((a, b) => {
      if (a.StartTime < b.StartTime) return 1;
      else if (a.StartTime > b.StartTime) return -1;
      else return 0;
    });
  } else {
    return item.sort((a, b) => {
      if (a.StartTime > b.StartTime) return 1;
      else if (a.StartTime < b.StartTime) return -1;
      else return 0;
    });
  }
}