import { UrlObject } from "url";

export interface DriversInfo {
  items: {
    code: String | "N/A",
    dateOfBirth: String | "N/A",
    driverId: String | "N/A",
    familyName: String | "N/A",
    givenName: String | "N/A",
    nationality: String | "N/A",
    permanentNumber: String | "N/A",
    url: UrlObject | "https://en.wikipedia.org/wiki/Formula_One"
  }
}

export interface TeamInfo {
  constructor: String | "N/A",
  name: String | "N/A",
  nationality: String | "N/A",
  url: UrlObject | "https://en.wikipedia.org/wiki/Formula_One"
}

export interface DriverInfo {
  code: String | "N/A",
  dateOfBirth: String | "N/A",
  driverId: String | "N/A",
  familyName: String | "N/A",
  givenName: String | "N/A",
  nationality: String | "N/A",
  permanentNumber: String | "N/A",
  url: UrlObject | "https://en.wikipedia.org/wiki/Formula_One"
}

export interface StandingsInfo {
  Constructors: Array<TeamInfo>,
  Driver: DriverInfo,
}

export interface DriverChampionInfo {
  items: {
    DriverStandings: Array<StandingsInfo>;
    round: String | "N/A";
    season: String | "N/A";
  };
}

export interface TeamsInfo {
  items: TeamInfo
}

export interface StandingsInfoConstructors {
  Constructor: TeamInfo
}

export interface TeamChampionInfo {
  items: {
    ConstructorStandings: Array<StandingsInfoConstructors>;
    round: String | "N/A";
    season: String | "N/A";
  };
}

// new
export interface NewDriverInfo {
  driver: String | "N/A",
  team: String | "N/A",
  country: String | "N/A",
  carNumber: String,
  debutSeason: Number,
  wikipediaPage: UrlObject | "https://en.wikipedia.org/wiki/Formula_One"
}

export interface NewDriversInfo {
  items: NewDriverInfo;
}

export interface NewTeamInfo {
  name: String | "N/A",
  nationality: String | "N/A",
  debutYear: Number,
  wikipediaPage: UrlObject | "https://en.wikipedia.org/wiki/Formula_One",
  message?: String | "N/A"
}

export interface NewTeamsInfo {
  items: NewTeamInfo;
}

export interface NewDriverChampionInfo {
  year: Number,
  driver: String | "N/A",
  team: String | "N/A",
  carNumber: Number,
  nationality: String | "N/A",
  wikipediaPage: UrlObject | "https://en.wikipedia.org/wiki/Formula_One"
}

export interface NewDriversChampionInfo {
  items: NewDriverChampionInfo
}

export interface NewTeamChampionInfo {
  year: Number,
  team: String | "N/A",
  wikipediaPage: UrlObject | "https://en.wikipedia.org/wiki/Formula_One"
}

export interface NewTeamsChampionInfo {
  items: NewTeamChampionInfo
}
