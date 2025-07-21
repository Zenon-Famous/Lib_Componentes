export default function formFields(fields, initial = {}) {
  const form = {};
  const errors = {};
  for (const i in fields) {
    const field = fields[i];
    form[field] = initial && initial[field] ? initial[field] : "";
    errors[field] = false;
  }
  return { form, errors, loading: false };
}