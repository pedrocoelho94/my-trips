import client from 'graphql/client'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PlaceTemplate, { PlaceTemplateProps } from 'templates/Place'

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  // retorna um loading ou qualquer coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <PlaceTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 4
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${ctx.params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 24 * 60 * 60,
    props: {
      place
    }
  }
}
