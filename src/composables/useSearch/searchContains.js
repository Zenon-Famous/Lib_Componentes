export default function searchContains(column, data, term) {
  const results = data.filter((dt) => {
    if (dt[column]) {
      const value = dt[column].toString();
      return value.includes(term);
    }
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