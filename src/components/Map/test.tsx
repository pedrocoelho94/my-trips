import { screen } from '@testing-library/react'
import { renderWithTheme } from 'helpers/renderWithTheme'

import Map from '.'

describe('<Map />', () => {
  it('should render without anymarker', () => {
    renderWithTheme(<Map />)

    //screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Campinas',
      slug: 'campinas',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 13,
        longitude: 34
      }
    }

    renderWithTheme(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument()
  })
})
