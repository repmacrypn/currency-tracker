/* eslint-disable react/static-property-placement */
import { ContextType, PureComponent } from 'react'
import Map, { ViewState, ViewStateChangeEvent } from 'react-map-gl'

import { IBankCard, IBankCardState } from '@/components/BankCardContainer/interfaces'
import { MarkerControl } from '@/components/MarkerControl'
import { SearchField } from '@/components/SearchField'
import { defaultLatitude, defaultLongitude, defaultZoom } from '@/constants/banksData'
import { ThemeContext } from '@/context/ThemeContext'
import { mapDark, mapLight } from '@/theme'
import { ThemeEnum } from '@/theme/types'
import { IBank } from '@/types/bank'
import { getCurrentBanks } from '@/utils/helpers/getCurrentBanks'

import { Container } from './styled'

export class BankCard extends PureComponent<IBankCard, IBankCardState> {
  static contextType = ThemeContext

  declare context: ContextType<typeof ThemeContext>

  constructor(props: IBankCard) {
    super(props)

    const { geo } = this.props

    this.state = {
      selectedBank: null,
      overview: {
        longitude: geo ? geo.longitude : defaultLongitude,
        latitude: geo ? geo.latitude : defaultLatitude,
        zoom: defaultZoom,
      },
    }
  }

  componentDidMount() {
    this.getBanks()
  }

  componentDidUpdate(prevProps: IBankCard) {
    const { geo } = this.props

    if (prevProps.geo !== geo) {
      this.getBanks()
    }
  }

  getBanks = () => {
    const { fetchBanks, fetchGeo, geo } = this.props

    if (!geo) {
      fetchGeo()
    }

    if (geo) {
      this.setState((prevState) => ({
        overview: {
          ...prevState.overview,
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
      }))

      fetchBanks(geo)
    }
  }

  onOverviewChange = (viewState: ViewState) => {
    this.setState((prevState) => ({
      overview: {
        ...prevState.overview,
        longitude: viewState.longitude,
        latitude: viewState.latitude,
        zoom: viewState.zoom,
      },
    }))
  }

  onSelectedBankChange = (bank: IBank | null) => {
    this.setState((prevState) => ({
      ...prevState,
      selectedBank: bank,
    }))
  }

  render() {
    const { banks, searchCurrency } = this.props
    const { overview, selectedBank } = this.state
    const { theme } = this.context

    const currentBanks = getCurrentBanks(banks, searchCurrency)
    const mapStyle = theme === ThemeEnum.dark ? mapLight : mapDark

    return (
      <Container>
        <SearchField />
        <Map
          {...overview}
          mapStyle={mapStyle}
          mapboxAccessToken='pk.eyJ1IjoiZGVuYmFyYWJyYXphIiwiYSI6ImNsamc0eXRiaTA2dXQzZm9lNWdkYzFrbXYifQ.JSPXP8VcLBbyHL9d6M13ig'
          attributionControl={false}
          onMove={(evt: ViewStateChangeEvent) => this.onOverviewChange(evt.viewState)}
          style={{ height: '60vh', width: '100vw' }}
        >
          <MarkerControl
            currentBanks={currentBanks}
            selectedBank={selectedBank}
            setSelectedBank={(bank) => this.onSelectedBankChange(bank)}
          />
        </Map>
      </Container>
    )
  }
}

BankCard.contextType = ThemeContext
