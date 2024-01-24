import { Container, LinkBox } from "./style"
import data from '../../data/external-links.json'
import flame from '/media/flame.svg'

export const ExternalLinksContainer = () => {
    return (
        <Container>
            {data.map((element) => {
                return (
                    <LinkBox
                        href={element.link}
                        target="_blank"
                        key={element.link}
                    >
                        {/* <img
                            src={element.img}
                            alt={`Ícone do ${element.social}`}
                            title={`Clique para ir para o ${element.social}`}
                        /> */}
                        <span><img src={flame} alt="Ícone de fogo" />{element.description}</span>
                    </LinkBox>
                )
            })}
        </Container>
    )
}
