import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import TeamChampion from "components/TeamChampion";
import Request from "components/Request";
import styles from "styles/TeamChampion.module.css";
import Container from "react-bootstrap/Container";

const TeamsChampions: NextPage = () => {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Request.newTeamsChampionsList();
      let data = list[0].items;
      setTeamList(data);
    };

    loadAll();
  }, []);

  return (
    <Container className={styles.team_champion__container}>
      {teamList.map((item: any, index: any) => {
        return <TeamChampion key={index} items={item} />;
      })}
    </Container>
  );
};

export default TeamsChampions;
