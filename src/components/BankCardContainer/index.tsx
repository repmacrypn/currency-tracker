import React from 'react'
import { connect } from 'react-redux'

import {
  IBankCardContainer,
  IMapDispatchToProps,
  IMapStateToProps,
} from '@/components/BankCardContainer/interfaces'
import { ErrorText } from '@/components/ErrorText'
import { BankCard } from '@/pages/BankCard'
import { setMapError, setSearchCurrency } from '@/store/actions/mapActions'
import { fetchBanks, fetchGeo } from '@/store/thunks/mapThunks'
import { RootStoreType } from '@/store/types'

class BankCardContainer extends React.Component<IBankCardContainer> {
  componentWillUnmount(): void {
    const { error, setMapError } = this.props

    if (error) {
      setMapError(null)
    }
  }

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
    status: state.map.mapStatus,
  }
}

const mapDispatchToProps: IMapDispatchToProps = {
  setSearchCurrency,
  setMapError,
  fetchBanks,
  fetchGeo,
}

export default connect(mapStateToProps, mapDispatchToProps)(BankCardContainer)
