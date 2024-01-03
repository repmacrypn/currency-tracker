import { handleDateControl } from '@/utils/helpers/handleDateControl'

describe('handleDateControl', () => {
  test('returns an object with correct properties', () => {
    const result = handleDateControl()

    expect(result).toHaveProperty('day')
    expect(result).toHaveProperty('month')
    expect(result).toHaveProperty('year')
    expect(result).toHaveProperty('pastDaysArr')
  })

  test('day, month properties are strings, year - number', () => {
    const result = handleDateControl()

    expect(typeof result.day).toBe('string')
    expect(typeof result.month).toBe('string')
    expect(typeof result.year).toBe('number')
  })

  test('pastDaysArr contains only past days of the month', () => {
    const result = handleDateControl()
    const currentDate = new Date()
    const currentDay = currentDate.getDate()
    const pastDays = result.pastDaysArr.map((day) => parseInt(day, 10))

    expect(pastDays.every((day) => day <= currentDay)).toBe(true)
  })
})
