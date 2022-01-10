import styled, { css } from 'styled-components'

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => css`
    .leaflet-container {
      background-color: ${theme.colors.background};
    }
  `}
`
