import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import DriverChampion from "components/DriverChampion";
import Request from "components/Request";
import styled from "styled-components";

const Table = styled.table`
  display: inline-table;
`;

const DriversChampions: NextPage = () => {
  const [driverList, setDriverList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Request.driversChampionsList();
      let data = list[0].items;
      setDriverList(data);
    };

    loadAll();
  }, []);

  return (
      <Table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Piloto</th>
            <th>Nacionalidade</th>
          </tr>
        </thead>
        <tbody className="drivers--list">
          {driverList.map((item: any, index: any) => {
            return (
              <DriverChampion key={index} items={item} />
            )
          })}
        </tbody>
      </Table>
  );
}

export default DriversChampions;
