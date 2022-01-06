import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 1100; //bigger than leaflet
    top: ${theme.sizes.medium};
    right: ${theme.sizes.medium};

    a {
      color: ${theme.colors.white};
      cursor: pointer;

      svg {
        transition: color 0.3s ease-in-out;

        &:hover {
          color: ${theme.colors.highlight};
        }
      }
    }
  `}
`
