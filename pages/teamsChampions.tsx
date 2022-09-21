import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import TeamChampion from "components/TeamChampion";
import Request from "components/Request";
import styled from "styled-components";

const Table = styled.table`
  display: inline-table;
`;

const TeamsChampions: NextPage = () => {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Request.teamsChampionsList();
      let data = list[0].items;
      setTeamList(data);
    };

    loadAll();
  }, []);

  return (
      <Table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Equipe</th>
            <th>Nacionalidade</th>
            <th>Página</th>
          </tr>
        </thead>
        <tbody className="teams--list">
          {teamList.map((item: any, index: any) => {
            return (
              <TeamChampion key={index} items={item} />
            )
          })}
        </tbody>
      </Table>
  );
}

export default TeamsChampions;
