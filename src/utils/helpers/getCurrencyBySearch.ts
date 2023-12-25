export const getCurrencyBySearch = (searchValue: string, codes: string) => {
  return codes.split(',').filter((code) => {
    const lowerCaseSearchValue = searchValue.toLowerCase()
    const lowerCaseCode = code.toLowerCase()

    return lowerCaseCode.includes(lowerCaseSearchValue)
  })
}
