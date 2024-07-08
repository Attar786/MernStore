import { Navbar, Nav, Container } from 'react-bootstrap'
import {FaShoppingCart , FaUser} from 'react-icons/fa'
const Header = () => {
  return (
   <header>
    <Navbar  bg='dark' variant='dark'  expand='lg'>
<Container>
    <Navbar.Brand href='#home'>MERN Store</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className='ms-auto'>
      <Nav.Link href='#home'>Home</Nav.Link>
      <Nav.Link href='#about'>About</Nav.Link>
      <Nav.Link href='#products'>Products</Nav.Link>
      <Nav.Link href='#contact'>Contact</Nav.Link>
      <Nav.Link href='#cart'><FaShoppingCart size={24} /></Nav.Link>
      <Nav.Link href='#profile'><FaUser size={24} /></Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
    </Navbar>
   </header>
  )
}

export default Header