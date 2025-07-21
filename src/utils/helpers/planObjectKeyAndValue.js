export default function planObjectKeyAndValue(params) {
  let stringPlan = "";

  if (params) {
    for (const key in params) {
      stringPlan += `${key}- ${params[key]}, `;
    }
    stringPlan = stringPlan.slice(0, -2);
    return stringPlan;
  } else {
    return;
  }
}