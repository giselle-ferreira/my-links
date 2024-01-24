import { Description } from "./Components/Description/Description"
import { Divider } from "./Components/Divider/Divider"
import { ExternalLinksContainer } from "./Components/ExternalLinksContainer/ExternalLinksContainer"
import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { LinksContainer } from "./Components/LinksContainer/LinksContainer"

function App() {

  return (
    <>
      <Header />
      <Description />
      {/* <ExternalLinksContainer /> */}
      {/* <Divider /> */}
      <LinksContainer />
      <Footer />
    </>
  )
}

export default App
