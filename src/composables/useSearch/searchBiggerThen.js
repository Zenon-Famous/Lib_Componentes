function parseDateFromYMD(term) {
  const [year, month, day] = term.split("/").map(Number);
  return new Date(year, month - 1, day);
}

export default function searchBiggerThen(column, data, term) {
  const dateTerm = parseDateFromYMD(term);
  if (isNaN(dateTerm)) return { error: "Data inválida", results: [], page: 1, pageSize: 100, totalPages: 1, totalRecords: 0 };

  const results = data.filter((dt) => {
    const dateObject = new Date(dt[column]);
    return !isNaN(dateObject) && dateObject > dateTerm;
  });

  return {
    error: null,
    page: 1,
    pageSize: 100,
    results,
    totalPages: 1,
    totalRecords: results.length,
  };
}
