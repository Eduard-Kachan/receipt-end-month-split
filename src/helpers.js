export const monthsOfYear = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september',
  'october', 'november', 'december']

export function checkDate(date) {

  if (typeof date !== 'string')
    return false

  const split = date.split('-')

  if (split.length !== 2)
    return false

  const year = split[0]
  const month = split[1]

  if (year.length !== 4)
    return false

  if (Number(year) === 1 || Number(year) === 0 || isNaN(Number(year)))
    return false

  if (monthsOfYear.indexOf(month) === -1)
    return false

  return {
    year: Number(year),
    month: month
  }
}

export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}