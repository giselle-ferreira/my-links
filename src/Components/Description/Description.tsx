import { MapPin } from "phosphor-react"
import { Container } from './style'

export const Description = () => {
  return (
    <Container>
      <section>
        <span><MapPin size={14} /> Brasil</span>
        <span>Desenvolvedora de Software</span>
      </section>

      <div>
        <span>Desenvolvedora de software com mais de 2 anos de experiência com foco em Java. Venho me especializando no desenvolvimento de APIs, microsserviços e soluções escaláveis.</span>
        <span>Atuo, principalmente, em projetos nos setores financeiro e de seguros. Com foco em performance, qualidade de código e boas práticas, estou em constante evolução técnica e sempre em busca de novos desafios.</span>
      </div>
    </Container>
  )
}
