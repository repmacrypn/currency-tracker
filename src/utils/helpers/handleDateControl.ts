import { periodEnum } from '@/types/timeline'

export const handleDateControl = (period: periodEnum = periodEnum.Day) => {
  const currentDate = new Date()

  let month =
    period === periodEnum.Month
      ? `0${currentDate.getMonth()}`.slice(-2)
      : `0${currentDate.getMonth() + 1}`.slice(-2)
  const day = `0${currentDate.getDate() - 1}`.slice(-2)
  let year = currentDate.getFullYear()
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate()
  const daysArr = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString())
  const pastDaysArr = daysArr.filter((day) => parseInt(day, 10) < currentDate.getDate())

  if (period === periodEnum.Month && currentDate.getMonth() === 0) {
    year -= 1
    month = '12'
  }

  return { day, month, year, pastDaysArr }
}
