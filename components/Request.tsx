const API_BASE = "http://ergast.com/api/f1";

const requestAPI = async (endpoint: String, type: String) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();

  if (type == "Drivers" && json) {
    return json.MRData.DriverTable.Drivers;
  }

  if (type == "Teams" && json) {
    return json.MRData.ConstructorTable.Constructors;
  }

  if (type == "Drivers Champions" && json) {
    return json.MRData.StandingsTable.StandingsLists;
  }

  if (type == "Teams Champions" && json) {
    return json.MRData.StandingsTable.StandingsLists;
  }
};

const requests = {
  driversList: async (year: Number) => {
    return [
      {
        slug: "drivers",
        title: `Formula One Drivers ${year}`,
        items: await requestAPI(`/${year}/drivers.json`, "Drivers"),
      },
    ];
  },
  teamsList: async (year: Number) => {
    return [
      {
        slug: "teams",
        title: `Formula One Teams ${year}`,
        items: await requestAPI(`/${year}/constructors.json`, "Teams"),
      },
    ];
  },
  driversChampionsList: async () => {
    return [
      {
        slug: "driversChampions",
        title: `Formula One Drivers Champions`,
        items: await requestAPI(`/driverStandings/1.json?limit=100`, "Drivers Champions"),
      },
    ];
  },
  teamsChampionsList: async () => {
    return [
      {
        slug: "teamsChampions",
        title: `Formula One Teams Champions`,
        items: await requestAPI(`/constructorStandings/1.json?limit=100`, "Teams Champions"),
      },
    ];
  },
};

export default requests;


/*

a = await fetch("http://ergast.com/api/f1/2022/drivers.json")
a = await a.json();
a && a.MRData ? console.log(a.MRData.DriverTable.Drivers) : console.error('No data found')

*/
