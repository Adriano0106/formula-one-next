import type { NextPage } from "next";
import type { InferGetStaticPropsType } from "next";
import React, { useEffect, useState } from "react";
import DriverChampion from "components/DriverChampion";
import Request from "components/Request";
import Container from "react-bootstrap/Container";
import styles from "styles/DriverChampion.module.css";
import { NewDriverChampionInfo } from "interfaces/interfaces";

const DriversChampions: NextPage = () => {
  const [driverList, setDriverList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Request.newDriversChampionsList();
      let data = list[0].items;
      setDriverList(data);
    };

    loadAll();
  }, []);

  return (
    <Container className={styles.driver_champion__container}>
      {driverList.map((item: any, index: any) => {
        return <DriverChampion key={index} items={item} />;
      })}
    </Container>
  );
};

export default DriversChampions;
