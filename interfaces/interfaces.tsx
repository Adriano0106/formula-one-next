import { UrlObject } from "url";

export interface DriverInfo {
  items: {
    code: String,
    dateOfBirth: String,
    driverId: String,
    familyName: String,
    givenName: String,
    nationality: String,
    permanentNumber: String,
    url: UrlObject
  }
}

export interface TeamInfo {
  constructor: String,
  name: String,
  nationality: String,
  url: UrlObject
}

export interface DriverInfo {
  code?: String,
  dateOfBirth?: String,
  driverId?: String,
  familyName?: String,
  givenName?: String,
  nationality?: String,
  permanentNumber?: String,
  url?: UrlObject | "https://en.wikipedia.org/wiki/Formula_One"
}

export interface StandingsInfo {
  Constructors: Array<TeamInfo>,
  Driver: DriverInfo,
}

export interface DriverChampionInfo {
  items: {
    DriverStandings: Array<StandingsInfo>;
    round: String;
    season: String;
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
    round: String;
    season: String;
  };
}
