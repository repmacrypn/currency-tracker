import React from 'react'
import { connect } from 'react-redux'

import {
  IBankCardContainer,
  IMapDispatchToProps,
  IMapStateToProps,
} from '@/components/BankCardContainer/interfaces'
import { ErrorText } from '@/components/ErrorText'
import { BankCard } from '@/pages/BankCard'
import { setSearchCurrency } from '@/store/actions/mapActions'
import { fetchBanks, fetchGeo } from '@/store/thunks/mapThunks'
import { RootStoreType } from '@/store/types'

class BankCardContainer extends React.Component<IBankCardContainer> {
  render() {
    const { error, ...rest } = this.props

    return error ? <ErrorText>{error}</ErrorText> : <BankCard {...rest} />
  }
}

const mapStateToProps = (state: RootStoreType): IMapStateToProps => {
  return {
    banks: state.map.banks,
    error: state.map.mapError,
    searchCurrency: state.map.searchCurrency,
    geo: state.map.geo,
  }
}

const mapDispatchToProps: IMapDispatchToProps = {
  setSearchCurrency,
  fetchBanks,
  fetchGeo,
}

export default connect(mapStateToProps, mapDispatchToProps)(BankCardContainer)
