import { getMonthName } from '@/utils/helpers/getMonthName'

describe('getMonthName', () => {
  const monthNumber = `0${new Date().getMonth() + 1}`.slice(-2)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  test('should return the correct month name', () => {
    expect(getMonthName()).toBe(months[+monthNumber - 1])
  })
})
