const API_BASE = "https://ergast.com/api/f1";
const NEW_API_BASE = process.env.NEXT_PUBLIC_API_URL;

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

const newRequestAPI = async (endpoint: String, type: String) => {
  const req = await fetch(`${NEW_API_BASE}${endpoint}`);
  const json = await req.json();

  if (type == "NewDrivers" && json) {
    return json;
  }
};

const requests = {
  driversList: async (year: Number) => {
    return [
      {
        slug: "drivers",
        title: `Formula One Drivers ${year}`,
        items: await newRequestAPI(`/${year}/drivers.json`, "NewDrivers"),
      },
    ];
  },
  newDriversList: async (year: Number) => {
    return [
      {
        slug: "drivers",
        title: `Formula One Drivers ${year}`,
        items: await newRequestAPI(`/drivers/${year}`, "NewDrivers"),
      },
    ];
  },
  // newDriversList: async (year: Number) => {
  //   try {
  //     const response = await axios.get(`${NEW_API_BASE}/drivers/${year}`);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
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
