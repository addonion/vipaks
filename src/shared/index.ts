export function dateFormater(date: string) {
  return new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}