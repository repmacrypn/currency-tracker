export const getMonthName = () => {
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

  if (monthNumber) {
    return months[+monthNumber - 1]
  }

  return null
}
