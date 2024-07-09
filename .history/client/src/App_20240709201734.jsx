import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeScreen from '../screen/HomeScreen'
import { Product } from '../components/Product'
// import Products from '../components/Product'

function App() {
  

  return (
    <>
      <Header/>
      <Container>
<HomeScreen />
{/* <Products/> */}

<Product/>
      </Container>
      <Footer/>
     
    </>
  )
}

export default App
