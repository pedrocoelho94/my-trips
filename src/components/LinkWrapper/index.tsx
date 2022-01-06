import Link from 'next/link'

import * as S from './styles'

export type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </S.Wrapper>
)

export default LinkWrapper
