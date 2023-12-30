import { Bank, IBank, IBanksData } from '@/types/bank'

export const getCurrentBanks = (
  banks: IBanksData | null,
  searchCurrency: string,
): IBank[] | undefined => {
  switch (searchCurrency) {
    case 'EUR || USD':
      return banks?.results
    case 'CAD':
      return banks?.results.filter((bank) => {
        return (
          bank.name.toLowerCase().includes(Bank.Bnb) ||
          bank.name.toLowerCase().includes(Bank.Prior) ||
          bank.name.toLowerCase().includes(Bank.Bsb) ||
          bank.name.toLowerCase().includes(Bank.Belinvest)
        )
      })
    case 'CNY':
      return banks?.results.filter((bank) => {
        return (
          bank.name.toLowerCase().includes(Bank.Alfa) ||
          bank.name.toLowerCase().includes(Bank.Mtb) ||
          bank.name.toLowerCase().includes(Bank.Dabrabyt) ||
          bank.name.toLowerCase().includes(Bank.Prior) ||
          bank.name.toLowerCase().includes(Bank.Sber)
        )
      })
    case 'ARS':
      return banks?.results.filter((bank) => {
        return (
          bank.name.toLowerCase().includes(Bank.Veb) ||
          bank.name.toLowerCase().includes(Bank.Mtb) ||
          bank.name.toLowerCase().includes(Bank.Bsb) ||
          bank.name.toLowerCase().includes(Bank.Alfa) ||
          bank.name.toLowerCase().includes(Bank.Dabrabyt)
        )
      })
    case 'BTH':
      return banks?.results.filter((bank) => {
        return (
          bank.name.toLowerCase().includes(Bank.Mtb) ||
          bank.name.toLowerCase().includes(Bank.Bnb) ||
          bank.name.toLowerCase().includes(Bank.Alfa) ||
          bank.name.toLowerCase().includes(Bank.Sber)
        )
      })
    case 'JPY':
      return banks?.results.filter((bank) => {
        return (
          bank.name.toLowerCase().includes(Bank.Tehno) ||
          bank.name.toLowerCase().includes(Bank.Absolut) ||
          bank.name.toLowerCase().includes(Bank.Alfa) ||
          bank.name.toLowerCase().includes(Bank.Sber)
        )
      })
    case 'TRY':
      return banks?.results.filter((bank) => {
        return (
          bank.name.toLowerCase().includes(Bank.Prior) ||
          bank.name.toLowerCase().includes(Bank.Bsb) ||
          bank.name.toLowerCase().includes(Bank.Veb) ||
          bank.name.toLowerCase().includes(Bank.Belinvest) ||
          bank.name.toLowerCase().includes(Bank.Absolut)
        )
      })
    case 'AUD':
      return banks?.results.filter((bank) => {
        return (
          bank.name.toLowerCase().includes(Bank.Belinvest) ||
          bank.name.toLowerCase().includes(Bank.Absolut) ||
          bank.name.toLowerCase().includes(Bank.Tehno) ||
          bank.name.toLowerCase().includes(Bank.Bnb)
        )
      })
    default:
      return banks?.results
  }
}
