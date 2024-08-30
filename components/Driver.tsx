import Link from "next/link";
import styles from "styles/Driver.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { NewDriversInfo } from 'interfaces/interfaces';

const Driver = (driver: NewDriversInfo) => {
  return (
    <tr className={styles.driver}>
      <td>{driver?.items?.carNumber}</td>
      <td>
        {driver?.items?.driver}
      </td>
      <td>{driver?.items?.team}</td>
      <td>{driver?.items?.country}</td>
      <td>
        <Link href={driver?.items?.wikipediaPage}>
          <a>
            <FontAwesomeIcon icon={faExternalLink} />
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default Driver;
