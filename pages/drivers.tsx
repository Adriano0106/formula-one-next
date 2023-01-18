import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Driver from "components/Driver";
import Request from "components/Request";
import styled from "styled-components";

const Table = styled.table`
  display: inline-table;
`;

let order = "asc";

const Drivers: NextPage = () => {
  const [driverList, setDriverList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Request.driversList(2022);
      let data = list[0].items;
      setDriverList(data);
    };

    loadAll();
  }, []);

  const orderAsc = (a: any, b: any) => {
    if (Number(a.permanentNumber) < Number(b.permanentNumber)) return -1;
    if (Number(a.permanentNumber) > Number(b.permanentNumber)) return 1;
    return 0;
  };

  const orderDesc = (a: any, b: any) => {
    if (Number(a.permanentNumber) < Number(b.permanentNumber)) return 1;
    if (Number(a.permanentNumber) > Number(b.permanentNumber)) return -1;
    return 0;
  };

  const reorderDrivers = (list: any) => {
    if (order == "desc") {
      list.sort(orderAsc);
      order = "asc";
    } else if (order == "asc") {
      list.sort(orderDesc);
      order = "desc";
    }

    setDriverList([...list]);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th
            className="drivers--number standard"
            onClick={() => reorderDrivers(driverList)}
          >
            Número
          </th>
          <th>Piloto</th>
          <th>Código</th>
          <th>Nacionalidade</th>
          <th>Página</th>
        </tr>
      </thead>
      <tbody className="drivers--list">{
        driverList.map((driver: any) => {
          return <Driver key={driver?.permanentNumber} items={driver}/>
        })
      }</tbody>
    </Table>
  );
};

export default Drivers;
