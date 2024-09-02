import Link from "next/link";
import styles from "styles/TeamChampion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { NewTeamsChampionInfo } from "interfaces/interfaces";
import Card from "react-bootstrap/Card";

const TeamChampion = (team: NewTeamsChampionInfo) => {
  return (
    <Card className={styles.team_champion__card} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {team?.items?.team}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {team?.items?.year}
        </Card.Subtitle>
        {/* <Card.Text>
        {team?.items?.nationality}
        </Card.Text> */}
        <Card.Text>
          <Link href={team?.items?.wikipediaPage}>
            <a>
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamChampion;
