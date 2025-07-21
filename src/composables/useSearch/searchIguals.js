export default function searchIguals(column, data, term) {
  const results = data.filter((dt) => {
    return dt[column] == term;
  });
  return {
    error: null,
    page: 1,
    pageSize: 100,
    results: results,
    totalPages: 1,
    totalRecords: results.length,
  };
}
