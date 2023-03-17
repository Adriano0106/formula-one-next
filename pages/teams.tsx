import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Team from "components/Team";
import Request from "components/Request";
import styled from "styled-components";
import { TeamInfo } from "interfaces/interfaces";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Teams: NextPage = () => {
  var yearSearch = new Date().getFullYear();
  const [year, setYear] = useState(yearSearch);
  const [teamList, setTeamList] = useState(Array<TeamInfo>);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Request.teamsList(year);
      let data = list[0].items;
      setTeamList(data);
    };

    loadAll();
  }, [year]);

  const reloadNewYear = (newYear: any) => {
    setYear(newYear);
  }

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
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
      </Form.Select>
      <Table responsive striped bordered hover size="sm">
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
    </Container>
  );
}

export default Teams;
