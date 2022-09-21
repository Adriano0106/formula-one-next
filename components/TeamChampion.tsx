import Link from "next/link";
import styles from "styles/Driver.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const TeamChampion = (team: any) => {
  return (
    <tr className={styles.driver}>
      <td>{team?.items?.season}</td>
      <td>
        {team?.items?.ConstructorStandings[0]?.Constructor?.name}
      </td>
      <td>{team?.items?.ConstructorStandings[0]?.Constructor?.nationality}</td>
      <td>
        <Link href={team?.items?.ConstructorStandings[0]?.Constructor?.url}>
          <a>
            <FontAwesomeIcon icon={faExternalLink} />
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default TeamChampion;
