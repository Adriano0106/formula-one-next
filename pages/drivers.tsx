import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Driver from "components/Driver";
import Request from "components/Request";
import styled from "styled-components";

const Table = styled.table`
  display: inline-table;
`;

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

  const callDrivers = (type: String) => {
    if (type == "order-asc") {
      driverList.sort(orderAsc);
    }
    if (type == "order-desc") {
      driverList.sort(orderDesc);
    }
    return driverList.map((item: any) => {
      console.log(item.permanentNumber);
      return <Driver key={item?.permanentNumber} items={item} />;
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <th className="drivers--number standard" onClick={() => callDrivers("order-asc")}>Número</th>
          <th>Piloto</th>
          <th>Código</th>
          <th>Nacionalidade</th>
          <th>Página</th>
        </tr>
      </thead>
      <tbody className="drivers--list">
        {callDrivers("order-asc")}
        </tbody>
    </Table>
  );
};

export default Drivers;
