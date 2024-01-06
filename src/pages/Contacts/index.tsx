import { contacts, mediaLinks } from '@/constants/contactsPageData'

import {
  Container,
  DataBlock,
  DataLink,
  LinksBlock,
  MediaImg,
  MediaLink,
  Title,
  Wrapper,
} from './styled'

export const Contacts = () => {
  return (
    <Container data-cy='contactsPage'>
      <Title>Contact us:</Title>
      <Wrapper>
        <DataBlock>
          {contacts.map(({ contact, link, linkType }) =>
            link ? (
              <p key={contact}>
                {contact}: <DataLink href={linkType + link}>{link}</DataLink>
              </p>
            ) : (
              <p key={contact}>{contact}</p>
            ),
          )}
        </DataBlock>
        <LinksBlock>
          {mediaLinks.map(({ icon, link, name }) => (
            <MediaLink key={name} href={link}>
              <MediaImg alt={`${name}Icon`} src={icon} />
            </MediaLink>
          ))}
        </LinksBlock>
      </Wrapper>
    </Container>
  )
}
