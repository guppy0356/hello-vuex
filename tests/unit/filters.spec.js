import { numberFormat } from '@/lib/filters'

describe('numberFormat', () => {
  test('add delimiters to number', () => {
    expect(numberFormat(1000000000)).toEqual("1,000,000,000")
  })
})
