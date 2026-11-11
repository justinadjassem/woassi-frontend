const amountFormatter = new Intl.NumberFormat("fr-FR");

/** 48500 → « 48 500 » (séparateur de milliers insécable, norme française). */
export function formatAmount(value: number): string {
  return amountFormatter.format(value);
}

/** 48500 → « 48 500 FCFA ». */
export function formatFcfa(value: number): string {
  return `${formatAmount(value)} FCFA`;
}

/** plural(2, "article") → « 2 articles ». */
export function plural(count: number, singular: string, pluralForm = `${singular}s`): string {
  return `${count} ${count > 1 ? pluralForm : singular}`;
}
