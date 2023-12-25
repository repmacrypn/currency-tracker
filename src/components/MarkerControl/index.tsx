import React, { memo } from 'react'
import { Marker, Popup } from 'react-map-gl'

import location from '@/assets/images/location.svg'
import { IMarkerControl } from '@/components/MarkerControl/interface'
import {
  Description,
  LocationImg,
  Name,
  PopupBlock,
} from '@/components/MarkerControl/styled'

export const MarkerControl = memo(
  ({ currentBanks, selectedBank, setSelectedBank }: IMarkerControl) => {
    const onClosePopupHandler = () => {
      setSelectedBank(null)
    }

    return currentBanks?.map((bank) => (
      <Marker
        key={bank.fsq_id}
        longitude={bank.geocodes.main.longitude}
        latitude={bank.geocodes.main.latitude}
        anchor='center'
        pitchAlignment='viewport'
      >
        <LocationImg
          src={location}
          alt='location'
          onClick={(e) => {
            e.preventDefault()
            setSelectedBank(bank)
          }}
        />

        {selectedBank && (
          <Popup
            longitude={selectedBank.geocodes.main.longitude}
            latitude={selectedBank.geocodes.main.latitude}
            onClose={onClosePopupHandler}
            closeButton
            closeOnClick={false}
          >
            <PopupBlock>
              <Name>{selectedBank.name}</Name>
              <Description>
                {selectedBank.location.formatted_address || selectedBank.location.address}
              </Description>
              <Description>
                {selectedBank.location && selectedBank.location.postcode}{' '}
                {selectedBank.timezone}
              </Description>
            </PopupBlock>
          </Popup>
        )}
      </Marker>
    ))
  },
)
