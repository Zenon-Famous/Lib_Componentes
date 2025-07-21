export default function timestamp(datetime) {
      if (datetime == null) return datetime;
      const date = new Date(datetime);
      if (isNaN(date)) return datetime;
      return date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
    };