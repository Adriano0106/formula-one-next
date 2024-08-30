import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Driver from "components/Driver";
import Request from "components/Request";
import styled from "styled-components";
import { NewDriverInfo } from "interfaces/interfaces";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const Table = styled.table`
//   display: inline-table;
// `;

let order = "desc";

const Drivers: NextPage = () => {
  var yearSearch = new Date().getFullYear();
  const [year, setYear] = useState(yearSearch);
  const [driverList, setDriverList] = useState(Array<NewDriverInfo>);

  useEffect(() => {
    const loadAll = async () => {
      // let list = await Request.driversList(year);
      let list = await Request.newDriversList(year);
      let data = list[0].items;
      setDriverList(data);
    };

    loadAll();
  }, [year]);

  const reloadNewYear = (newYear: any) => {
    setYear(newYear);
  }

  const orderAsc = (a: NewDriverInfo, b: NewDriverInfo) => {
    if (Number(a.carNumber) < Number(b.carNumber)) return -1;
    if (Number(a.carNumber) > Number(b.carNumber)) return 1;
    return 0;
  };

  const orderDesc = (a: NewDriverInfo, b: NewDriverInfo) => {
    if (Number(a.carNumber) < Number(b.carNumber)) return 1;
    if (Number(a.carNumber) > Number(b.carNumber)) return -1;
    return 0;
  };

  const reorderDrivers = (list: Array<NewDriverInfo>) => {
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
      <Form.Select
        value={year}
        onChange={(e: any) => reloadNewYear(e.currentTarget.value)}
      >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        {/* <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option> */}
      </Form.Select>
      <br />
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th
              className="drivers--number standard"
              onClick={() => reorderDrivers(driverList)}
            >
              Número
            </th>
            <th>Piloto</th>
            <th>Equipe</th>
            <th>Nacionalidade</th>
            <th>Página</th>
          </tr>
        </thead>
        <tbody className="drivers--list">
          {driverList.map((driver: NewDriverInfo) => {
            return (
              <Driver key={Number(driver?.carNumber)} items={driver} />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Drivers;
