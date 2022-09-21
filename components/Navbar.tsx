import Link from "next/link";
import styles from "styles/Navbar.module.css"

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.navbar__item}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.navbar__item}>
        <Link href="drivers">
          <a>Pilotos</a>
        </Link>
      </li>
      <li className={styles.navbar__item}>
        <Link href="teams">
          <a>Equipes</a>
        </Link>
      </li>
      <li className={styles.navbar__item}>
        <Link href="driversChampions">
          <a>Pilotos Campeões</a>
        </Link>
      </li>
      <li className={styles.navbar__item}>
        <Link href="teamsChampions">
          <a>Equipes Campeãs</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
