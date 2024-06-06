import { MapPin } from "phosphor-react"
import { Container } from './style'

export const Description = () => {
  return (
    <Container>
      <section>
        <span><MapPin size={14} /> Brasil</span>
        <span>Desenvolvedora de Software</span>
      </section>

      <p>Explorando os horizontes da tecnologia a cada nova linha de código.</p>
    </Container>
  )
}