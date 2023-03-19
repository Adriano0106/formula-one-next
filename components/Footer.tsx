import Link from "next/link";
import styles from "styles/Footer.module.css";
import Card from "react-bootstrap/Card";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Card className={`${styles.footer} text-center`}>
      <Card.Footer className={`text-muted`}>
        Desenvolvido por:
        <Link href="https://github.com/Adriano0106">
          <a className={styles.footer__link} target="_blank">&nbsp;Adriano Andrade da Silva &nbsp;<FaGithub/></a>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Footer;
