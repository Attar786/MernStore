import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeScreen from '../screen/HomeScreen'

function App() {
  

  return (
    <>
      <Header/>
      <Container>
<HomeScreen />
      </Container>
      <Footer/>
     
    </>
  )
}

export default App
