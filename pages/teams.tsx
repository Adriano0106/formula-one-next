import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Team from "components/Team";
import Request from "components/Request";
import { NewTeamInfo } from "interfaces/interfaces";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Teams: NextPage = () => {
  // var yearSearch = new Date().getFullYear();
  var yearSearch = 2024;
  const [year, setYear] = useState(yearSearch);
  const [teamList, setTeamList] = useState(Array<NewTeamInfo>);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Request.newTeamsList(year);
      let data = list[0].items;
      setTeamList(data);
    };

    loadAll();
  }, [year]);

  const reloadNewYear = (newYear: any) => {
    setYear(newYear);
  }

  console.log(teamList)

  return (
    <Container>
      <Form.Select
        value={year}
        onChange={(e: any) => reloadNewYear(e.currentTarget.value)}
      >
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        {/*
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
        */}
      </Form.Select>
      <br />
      {teamList?.length > 0 ? (
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nacionalidade</th>
              <th>Página</th>
            </tr>
          </thead>
          <tbody className="drivers--list">
            {teamList.map((item: NewTeamInfo, index: number) => (
              <Team key={index} items={item} />
            ))}
          </tbody>
        </Table>
      ) : (
        <p>{"Nenhuma equipe encontrada"}</p>
      )}

    </Container>
  );
}

export default Teams;
