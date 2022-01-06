import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);

    ${media.lessThan('large')`
    padding-left: calc(${theme.grid.gutter} * 2);
      padding-right: calc(${theme.grid.gutter} * 2);
    `}
  `}
`
