const NEW_API_BASE = process.env.NEXT_PUBLIC_API_URL;

const newRequestAPI = async (endpoint: String, type: String) => {
  const req = await fetch(`${NEW_API_BASE}${endpoint}`);
  const json = await req.json();

  if (type == "Drivers" && json) {
    return json;
  }
  if (type == "Teams" && json) {
    return json;
  }
  if (type == "Drivers Champions" && json) {
    return json;
  }
  if (type == "Teams Champions" && json) {
    return json;
  }
};

const requests = {
  newTeamsList: async (year: Number) => {
    return [
      {
        slug: "teams",
        title: `Formula One Teams ${year}`,
        items: await newRequestAPI(`/teams/${year}`, "Teams"),
      },
    ];
  },
  newDriversList: async (year: Number) => {
    return [
      {
        slug: "drivers",
        title: `Formula One Drivers ${year}`,
        items: await newRequestAPI(`/drivers/${year}`, "Drivers"),
      },
    ];
  },
  newDriversChampionsList: async () => {
    return [
      {
        slug: "driversChampions",
        title: `Formula One Drivers Champions`,
        items: await newRequestAPI(`/champions/drivers`, "Drivers Champions"),
      },
    ];
  },
  newTeamsChampionsList: async () => {
    return [
      {
        slug: "teamsChampions",
        title: `Formula One Teams Champions`,
        items: await newRequestAPI(`/champions/teams`, "Teams Champions"),
      },
    ];
  },
};

export default requests;
