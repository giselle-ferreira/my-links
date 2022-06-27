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
    <div>
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
    </div>
  )
}

export default App


const ContainerContact = styled(ContainerLinks)`
  margin-top: 25px;
`;
