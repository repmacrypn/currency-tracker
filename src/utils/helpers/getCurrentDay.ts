export const getCurrentDay = (option = '1') => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = `0${currentDate.getMonth() + 1}`.slice(-2)
  const day = `0${option}`.slice(-2)

  return `${year}-${month}-${day}`
}
