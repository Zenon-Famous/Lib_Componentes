export default function phone(key) {
      if (/^\+55(\d{2})(\d{4,5})(\d{4})$/.test(key)) {
        return key.replace(/^\+55(\d{2})(\d{4,5})(\d{4})$/, "+55 ($1) $2-$3");
      }
      return key;
    };