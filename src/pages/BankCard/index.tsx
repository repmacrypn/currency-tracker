import { ContextType, PureComponent } from 'react'
import Map, { ViewState, ViewStateChangeEvent } from 'react-map-gl'

import { IBankCard, IBankCardState } from '@/components/BankCardContainer/interfaces'
import { Loader } from '@/components/Loader'
import { MarkerControl } from '@/components/MarkerControl'
import { SearchField } from '@/components/SearchField'
import { defaultLatitude, defaultLongitude, defaultZoom } from '@/constants/banksData'
import { defaultMapStyle } from '@/constants/common'
import { ThemeContext } from '@/context/ThemeContext'
import { RequestStatusType } from '@/store/reducers/app/types'
import { mapDark, mapLight } from '@/theme'
import { ThemeEnum } from '@/theme/types'
import { IBank } from '@/types/bank'
import { getCurrentBanks } from '@/utils/helpers/getCurrentBanks'

import { Container } from './styled'

const ACCESS_TOKEN = process.env.REACT_APP_MAP_ACCESS_TOKEN

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
    const { banks, searchCurrency, status } = this.props
    const { overview, selectedBank } = this.state
    const { theme } = this.context

    const currentBanks = getCurrentBanks(banks, searchCurrency)
    const mapStyle = theme === ThemeEnum.dark ? mapLight : mapDark

    return (
      <Container data-testid='map'>
        <SearchField />
        {status === RequestStatusType.Loading && <Loader />}
        <Map
          {...overview}
          mapStyle={mapStyle}
          mapboxAccessToken={ACCESS_TOKEN}
          attributionControl={false}
          onMove={(evt: ViewStateChangeEvent) => this.onOverviewChange(evt.viewState)}
          style={defaultMapStyle}
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
