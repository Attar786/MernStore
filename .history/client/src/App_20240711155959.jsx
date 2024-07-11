import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import HomeScreen from '../screen/HomeScreen'
import { Outlet } from 'react-router-dom'

// import { Product } from '../components/Product'

function App() {
  

  return (
    <>
      <Header/>
      <Container>
{/* <HomeScreen /> */}
<Outlet/>
{/* <Product/> */}
      </Container>
      <Footer/>
     
    </>
  )
}

export default App
