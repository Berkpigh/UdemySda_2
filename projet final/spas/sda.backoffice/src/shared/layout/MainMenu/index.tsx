import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuthenticationContext } from "../../../features/authentication/store"

/**
 * Menu principal de l'application
 */
export const MainMenu = () => {
  const authContext = useAuthenticationContext()

  return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Seigneur des Anneaux | connecté ? {authContext.user.status}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Accueil</Nav.Link>
              {authContext.user.status === 'loggedIn' && <Nav.Link as={Link} to="/characters">Les personnages</Nav.Link>}
              {authContext.user.status === 'loggedIn' && <Nav.Link as={Link} to="/games">Les parties</Nav.Link>}
              {authContext.user.status === 'loggedIn' && <Nav.Link as={Link} to="/games/new">Nouvelle partie</Nav.Link>}
              {authContext.user.status === 'loggedIn' && <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}