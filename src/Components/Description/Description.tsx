import { MapPin } from "phosphor-react"
import { Container } from './style'

export const Description = () => {
  return (
    <Container>
        <section>
            <span><MapPin size={14} /> Macaé &#183; RJ &#183; Brasil</span>
            <span>Desenvolvedora de Software</span>            
        </section>
        
        <p>Traçando meu caminho em tecnologia a cada novo código.</p>
    </Container>
  )
}