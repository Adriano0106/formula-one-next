import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Driver from "components/Driver";
import Request from "components/Request";
import styled from "styled-components";
import { DriverInfo } from "interfaces/interfaces";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const Table = styled.table`
//   display: inline-table;
// `;

let order = "desc";

const Drivers: NextPage = () => {
  const [driverList, setDriverList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      var actualYear = new Date().getFullYear();
      let list = await Request.driversList(actualYear);
      let data = list[0].items;
      setDriverList(data);
    };

    loadAll();
    console.log("opa");
  }, []);

  const orderAsc = (a: DriverInfo, b: DriverInfo) => {
    if (Number(a.permanentNumber) < Number(b.permanentNumber)) return -1;
    if (Number(a.permanentNumber) > Number(b.permanentNumber)) return 1;
    return 0;
  };

  const orderDesc = (a: DriverInfo, b: DriverInfo) => {
    if (Number(a.permanentNumber) < Number(b.permanentNumber)) return 1;
    if (Number(a.permanentNumber) > Number(b.permanentNumber)) return -1;
    return 0;
  };

  const reorderDrivers = (list: Array<DriverInfo>) => {
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
    <Container>
      <Table striped bordered hover size="sm">
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
        <tbody className="drivers--list">
          {driverList.map((driver: DriverInfo) => {
            return (
              <Driver key={Number(driver?.permanentNumber)} items={driver} />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Drivers;
