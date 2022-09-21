import type { NextPage } from "next";
import styled from "styled-components";
import BasicLayout from "layout/Basic";
import styles from "styles/Home.module.css"


const Title = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <BasicLayout>
      <Title>Página feita em Next referente a Fórmula 1</Title>

      <p>Aqui você encontrará informações referentes aos seguintes tópicos:</p>
      <ul className={styles.list__info}>
        <li className={styles.list__item}>Pilotos</li>
        <li className={styles.list__item}>Equipes</li>
        <li className={styles.list__item}>Pilotos campeões da F1 (em breve)</li>
        <li className={styles.list__item}>Equipes campeãs da F1 (em breve)</li>
      </ul>

      <p>Tecnologias utilizadas</p>
      <ul className={styles.list__techs}>
        <li className={styles.list__item}>Next</li>
        <li className={styles.list__item}>React</li>
        <li className={styles.list__item}>Styled Components</li>
      </ul>
    </BasicLayout>
  );
};

export default Home;
