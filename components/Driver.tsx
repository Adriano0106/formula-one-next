import Link from "next/link";
import styles from "styles/Driver.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Driver = (driver: any) => {
  return (
    <tr className={styles.driver}>
      <td>{driver?.items?.permanentNumber}</td>
      <td>
        {driver?.items?.givenName} {driver?.items?.familyName}
      </td>
      <td>{driver?.items?.code}</td>
      <td>{driver?.items?.nationality}</td>
      <td>
        <Link href={driver?.items?.url}>
          <a>
            <FontAwesomeIcon icon={faExternalLink} />
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default Driver;
