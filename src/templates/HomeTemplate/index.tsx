import LinkWrapper from 'components/LinkWrapper'

import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const HomeTemplate = () => (
  <>
    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="about" />
    </LinkWrapper>
    <Map />
  </>
)

export default HomeTemplate
