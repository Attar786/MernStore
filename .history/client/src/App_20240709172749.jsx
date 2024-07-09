import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Homesc from '../screen/Homesc'

function App() {
  

  return (
    <>
      <Header/>
      <Container>
<Homesc />
      </Container>
      <Footer/>
     
    </>
  )
}

export default App
