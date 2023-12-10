import { Button, Container, ErrorText } from './styled'

export const ErrorFallback = () => {
  const handlerClick = () => {
    window.location.reload()
  }

  return (
    <Container>
      <ErrorText>Something went wrong, please reload the page...</ErrorText>
      <Button onClick={handlerClick}>Reload page</Button>
    </Container>
  )
}
