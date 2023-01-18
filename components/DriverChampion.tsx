import Link from "next/link";
import styles from "styles/Driver.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { UrlObject } from "url";

interface TeamInfo {
  constructor: String,
  name: String,
  nationality: String,
  url: UrlObject
}
interface DriverInfo {
  code?: String,
  dateOfBirth: String,
  driverId?: String,
  familyName: String,
  givenName: String,
  nationality: String,
  permanentNumber?: String,
  url: UrlObject | "https://en.wikipedia.org/wiki/Formula_One"
}
interface StandingsInfo {
  Constructors: Array<TeamInfo>,
  Driver: DriverInfo,
}
interface DriverChampionInfo {
  items: {
    DriverStandings: Array<StandingsInfo>;
    round: String;
    season: String;
  };
}

const DriverChampion = (driver: DriverChampionInfo) => {
  console.log(driver);
  return (
    <tr className={styles.driver}>
      <td>{driver?.items?.season}</td>
      <td>
        {driver?.items?.DriverStandings[0]?.Driver?.givenName}{" "}
        {driver?.items?.DriverStandings[0]?.Driver?.familyName}
      </td>
      <td>{driver?.items?.DriverStandings[0]?.Driver?.nationality}</td>
      <td>
        <Link href={driver?.items?.DriverStandings[0]?.Driver?.url}>
          <a>
            <FontAwesomeIcon icon={faExternalLink} />
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default DriverChampion;
