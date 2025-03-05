import Link from "next/link";
import styles from "styles/Team.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { NewTeamsInfo } from "interfaces/interfaces";

const Team = (team: NewTeamsInfo) => {
  return (
    <tr className={styles.team}>
      <td>{team?.items?.name}</td>
      <td>{team?.items?.nationality}</td>
      <td>
        <Link href={team?.items?.wikipediaPage}>
          <a>
            <FontAwesomeIcon icon={faExternalLink} />
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default Team;
