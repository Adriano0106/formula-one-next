import Link from "next/link";
import styles from "styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";

const Navbar = () => {
  return (
    <NavbarBootstrap bg="dark" variant="dark" className={styles.navbar}>
      <Container>
        <NavbarBootstrap.Brand href="/">Formula One Next</NavbarBootstrap.Brand>
        <Nav className="me-auto">
          <Nav.Link href="drivers" className={styles.navbar__item}>Pilotos</Nav.Link>
          <Nav.Link href="teams" className={styles.navbar__item}>Equipes</Nav.Link>
          <Nav.Link href="driversChampions" className={styles.navbar__item}>Pilotos Campeões</Nav.Link>
          <Nav.Link href="teamsChampions" className={styles.navbar__item}>Equipes Campeãs</Nav.Link>
        </Nav>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
