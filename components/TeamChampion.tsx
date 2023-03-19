import Link from "next/link";
import styles from "styles/TeamChampion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { TeamChampionInfo } from "interfaces/interfaces";
import Card from "react-bootstrap/Card";

const TeamChampion = (team: TeamChampionInfo) => {
  return (
    <Card className={styles.team_champion__card} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
        {team?.items?.ConstructorStandings[0]?.Constructor?.name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
        {team?.items?.season}
        </Card.Subtitle>
        <Card.Text>
        {team?.items?.ConstructorStandings[0]?.Constructor?.nationality}
        </Card.Text>
        <Card.Text>
          <Link href={team?.items?.ConstructorStandings[0]?.Constructor?.url}>
            <a>
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </Link>
        </Card.Text>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default TeamChampion;
