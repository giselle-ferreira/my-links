import { GithubLink } from './Components/GithubLink';
import { Header } from './Components/Header';
import { DiscordLink } from './Components/DiscordLink';
import { LinkedinLink } from './Components/LinkedinLink';
import { TwitterLink } from './Components/TwitterLink';
import { Description } from './Components/Description';
import { Footer } from './Components/Footer';
import { EmailButton } from './Components/EmailButton';
import { CVButton } from './Components/CVButton';
import styled from 'styled-components';
import { ContainerLinks } from './Styles';

function App() {
  

  return (
    <Body>
      <Header />
      <Description />

      <ContainerLinks>
        <LinkedinLink />
        <GithubLink />        
        <DiscordLink/>
        <TwitterLink />              
      </ContainerLinks>

      <ContainerContact>
        <EmailButton />
        <CVButton />
      </ContainerContact>

      <Footer />
    </Body>
  )
}

export default App


const Body = styled.div`
  height: 100%;
`;

const ContainerContact = styled(ContainerLinks)`
  margin-top: 25px;
  margin-bottom: 70px;
`;
