export * from './Nav'
export * from './Card'

export const dateFormater = (date: string) => {
  return new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}