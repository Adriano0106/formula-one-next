import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Team from "components/Team";
import Request from "components/Request";
import styled from "styled-components";
import { TeamInfo } from "interfaces/interfaces";

const Table = styled.table`
  display: inline-table;
`;

const Teams: NextPage = () => {
  const [teamList, setTeamList] = useState(Array<TeamInfo>);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Request.teamsList(2022);
      let data = list[0].items;
      setTeamList(data);
    };

    loadAll();
  }, []);

  return (
    <Table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nacionalidade</th>
            <th>Página</th>
          </tr>
        </thead>
        <tbody className="drivers--list">
          {teamList.map((item: TeamInfo, index: Number) => {
            return (
              <Team key={Number(index)} items={item} />
            )
          })}
        </tbody>
      </Table>
  );
}

export default Teams;
