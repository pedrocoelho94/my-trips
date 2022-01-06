import LinkWrapper from 'components/LinkWrapper'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { Container } from 'components/Container'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Container>
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="close" />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  </Container>
)

export default PageTemplate
