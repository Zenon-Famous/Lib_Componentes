export default function searchDateIgual(column, data, term) {
  const [year, month, day] = term.split("/").map(Number);
  const dateTerm = new Date(year, month - 1, day);

  if (isNaN(dateTerm)) {
    return {
      error: "Data inválida",
      results: [],
      page: 1,
      pageSize: 0,
      totalPages: 0,
      totalRecords: 0,
    };
  }

  function toYMD(date) {
    return date.toISOString().slice(0, 10);
  }

  const results = data.filter((dt) => {
    const dateObject = new Date(dt[column]);
    if (isNaN(dateObject)) return false;

    // Compara só a parte da data, ignorando horas/minutos/segundos
    return toYMD(dateTerm) === toYMD(dateObject);
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
