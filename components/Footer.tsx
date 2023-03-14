import Link from "next/link";
import styles from "styles/Footer.module.css";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <Card className={`${styles.footer} text-center`}>
      <Card.Footer className={`text-muted`}>Desenvolvido por: Adriano Andrade da Silva</Card.Footer>
    </Card>
  );
};

export default Footer;
