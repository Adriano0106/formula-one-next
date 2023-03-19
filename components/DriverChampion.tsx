import Link from "next/link";
import styles from "styles/DriverChampion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { DriverChampionInfo } from "interfaces/interfaces";
import Card from "react-bootstrap/Card";

const DriverChampion = (driver: DriverChampionInfo) => {
  return (
    <Card className={styles.driver_champion__card} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {driver?.items?.DriverStandings[0]?.Driver?.givenName}{" "}
          {driver?.items?.DriverStandings[0]?.Driver?.familyName}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {driver?.items?.season}
        </Card.Subtitle>
        <Card.Text>
          {driver?.items?.DriverStandings[0]?.Driver?.nationality}
        </Card.Text>
        <Card.Text>
          <Link href={driver?.items?.DriverStandings[0]?.Driver?.url}>
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

export default DriverChampion;
