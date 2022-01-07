import { NextSeo } from 'next-seo'
import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import { Container } from 'components/Container'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import { useRouter } from 'next/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          `${place.description?.text}` ||
          'Um projeto simples para mostrar em um mapa locais em que visitei.'
        }
        canonical="https://mytrips.vercel.com/"
        openGraph={{
          url: 'https://mytrips.vercel.com/',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <S.Wrapper>
        <LinkWrapper href="/">
          <CloseOutline size={32} aria-label="Go back to map" />
        </LinkWrapper>

        <S.Content>
          <Container>
            <S.Heading>{place.name}</S.Heading>
            <S.Body
              dangerouslySetInnerHTML={{
                __html: place.description?.html || ''
              }}
            />

            <S.Gallery>
              {place.gallery.map((image, index) => (
                <Image
                  key={`photo-${index}`}
                  src={image.url}
                  alt={place.name}
                  width={1000}
                  height={600}
                  quality={75}
                  objectFit="cover"
                />
              ))}
            </S.Gallery>
          </Container>
        </S.Content>
      </S.Wrapper>
    </>
  )
}

export default PlaceTemplate
