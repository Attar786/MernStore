import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeScreen from '../screen/HomeScreen'
import Products from '../components/Products'

function App() {
  

  return (
    <>
      <Header/>
      <Container>
<HomeScreen />
<Products/>
      </Container>
      <Footer/>
     
    </>
  )
}

export default App
