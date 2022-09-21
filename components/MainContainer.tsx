import { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/MainContainer.module.css";

type Props = {
  children: JSX.Element;
};

const MainContainer = ({ children }: Props) => {
  return (
    <div>
      <div className="bg">
        <Navbar />
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
