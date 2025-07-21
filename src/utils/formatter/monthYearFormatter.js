export default function month3year4(datetime) {
    if (!datetime) return datetime;
      const date = new Date(datetime);
    if (isNaN(date.getTime())) return datetime; 

      const monthFormatter = new Intl.DateTimeFormat('pt-BR', { month: 'short' });
      const month = monthFormatter.format(date).toUpperCase().replace(".", "");
      const year = date.getFullYear();

      return `${month}/${year}`;
}