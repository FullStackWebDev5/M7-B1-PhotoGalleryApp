import { Container, Navbar, Nav } from "react-bootstrap"
import brandLogo from '../assets/brand-logo.png'

const NavbarComponent = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
					<img
						alt="logo"
						src={brandLogo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/> Photo Gallery App
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
          </Nav>
          <Nav>
						<Nav.Link href="">About Us</Nav.Link>
						<Nav.Link href="">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}

export default NavbarComponent