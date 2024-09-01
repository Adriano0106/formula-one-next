import Link from "next/link";
import styles from "styles/DriverChampion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { NewDriversChampionInfo } from "interfaces/interfaces";
import Card from "react-bootstrap/Card";

const DriverChampion = (driver: NewDriversChampionInfo) => {
  console.log('etste', driver)
  return (
    <Card className={styles.driver_champion__card} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
        #{driver?.items?.carNumber.toString()} {driver?.items?.driver}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {driver?.items?.year.toString()}
        </Card.Subtitle>
        <Card.Text>
          {driver?.items?.nationality}
        </Card.Text>
        <Card.Text>
          <Link href={driver?.items?.wikipediaPage}>
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
