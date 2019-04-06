export const numberFormat = (counter) => {
  return counter.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
