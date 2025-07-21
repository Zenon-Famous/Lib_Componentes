export default function validateForm(fields, data) {
  for (const field of fields) {
    const value = data[field];

    if (field === "email") {
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      if (!emailRegex.test(value)) {
        return field;
      }
    } else if (
      value === undefined ||
      value === null ||
      (typeof value === "string" && !value.trim()) ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return field;
    }
  }
  return null;
}
