import { getCurrentDay } from '@/utils/helpers/getCurrentDay'

describe('getCurrentDay', () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = `0${currentDate.getMonth() + 1}`.slice(-2)

  afterAll(() => jest.clearAllMocks())

  test('should return the correct current date according to the provided valid day', () => {
    const currentDay = '9'

    const result = getCurrentDay(currentDay)

    expect(result).toEqual(`${year}-${month}-09`)
  })

  test('should return the correct current date if the day was not provided', () => {
    const result = getCurrentDay()

    expect(result).toEqual(`${year}-${month}-01`)
  })
})
