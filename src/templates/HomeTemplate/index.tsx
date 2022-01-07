import LinkWrapper from 'components/LinkWrapper'

import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="about" />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default HomeTemplate
