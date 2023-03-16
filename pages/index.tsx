import type { NextPage } from "next";
import styled from "styled-components";
import BasicLayout from "layout/Basic";
import styles from "styles/Home.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const Title = styled.h1`
  color: black;
  font-weight: 700;
  margin-bottom: 20px
`;

const Home: NextPage = () => {
  return (
    <BasicLayout>
      <Title>Página feita em Next referente a Fórmula 1</Title>

      <ListGroup className={styles.listgroup}>
        <ListGroup.Item active>
          Aqui você encontrará informações referentes aos seguintes tópicos:
        </ListGroup.Item>
        <ListGroup.Item>Pilotos</ListGroup.Item>
        <ListGroup.Item>Equipes</ListGroup.Item>
        <ListGroup.Item>
          Pilotos campeões da F1 <Badge bg="secondary">(em breve)</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          Equipes campeãs da F1 <Badge bg="secondary">(em breve)</Badge>
        </ListGroup.Item>
        {/* <ListGroup.Item disabled> Morbi leo risus</ListGroup.Item> */}
      </ListGroup> <br />
      <ListGroup className={styles.listgroup}>
        <ListGroup.Item active>Tecnologias utilizadas</ListGroup.Item>
        <ListGroup.Item>Next</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Styled Components</ListGroup.Item>
        <ListGroup.Item>React Bootstrap</ListGroup.Item>
        {/* <ListGroup.Item disabled> Morbi leo risus</ListGroup.Item> */}
      </ListGroup>
    </BasicLayout>
  );
};

export default Home;
