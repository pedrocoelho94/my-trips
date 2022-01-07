import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <NextSeo
      title="My Trips"
      description="Um projeto simples para mostrar em um mapa locais em que visitei."
      canonical="https://mytrips.vercel.com/"
      openGraph={{
        url: 'https://mytrips.vercel.com/',
        images: [
          {
            url: 'https://mytrips.vercel.com/img/cover.png',
            width: 1280,
            height: 720,
            alt: 'My Trips'
          }
        ]
      }}
    />
    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="about" />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default HomeTemplate
