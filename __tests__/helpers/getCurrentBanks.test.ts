import { allBanks } from '@/constants/testsData'
import { Bank } from '@/types/bank'
import { getCurrentBanks } from '@/utils/helpers/getCurrentBanks'

describe('getCurrentBanks', () => {
  test('should return the banks where there is EUR, EUR is in all banks', () => {
    const currencyCode = 'EUR'
    const result = getCurrentBanks(allBanks, currencyCode)

    expect(result).toEqual(allBanks.results)
  })

  test('should return the banks where there is TRY, TRY is only in BSB, Prior, БелИнвест, Абсолют', () => {
    const currencyCode = 'TRY'
    const mockResult = allBanks.results.filter(
      (bank) =>
        bank.name.toLowerCase().includes(Bank.Prior) ||
        bank.name.toLowerCase().includes(Bank.Bsb) ||
        bank.name.toLowerCase().includes(Bank.Belinvest) ||
        bank.name.toLowerCase().includes(Bank.Absolut),
    )

    const result = getCurrentBanks(allBanks, currencyCode)

    expect(result).toEqual(mockResult)
  })
})
