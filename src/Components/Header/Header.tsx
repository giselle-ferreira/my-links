import { LinkSimple } from "phosphor-react";
import { Container } from './style'
import profilePicture from '/media/profile-picture.jpg'

export const Header = () => {
  return (
    <Container>
      <section> 
        <h1>Meus <LinkSimple size={12} fill='#CBCBCB' /> Links</h1>
        <h2>Giselle Ferreira</h2>
      </section>
      
      <img src={profilePicture} alt="Giselle's profile picture" width="85" />
      <span></span>
    </Container>
  )
}
