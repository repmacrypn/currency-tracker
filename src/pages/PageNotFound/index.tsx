import pageNotFoundImg from '@/assets/images/pageNotFound.svg'

import { Container, PageNotFoundImg } from './styled'

export const PageNotFound = () => {
  return (
    <Container>
      <PageNotFoundImg src={pageNotFoundImg} alt='PageNotFoundImg' />
    </Container>
  )
}
