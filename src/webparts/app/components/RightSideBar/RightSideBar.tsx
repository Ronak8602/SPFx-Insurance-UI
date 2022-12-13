import * as React from "react";
import { Divider } from "@fluentui/react-components";
import styles from "./RightSideBar.module.scss";
import Heading from "../Other Components/Heading";
import car from "../../assets/car.png";
import health1 from "../../assets/health1.png";
import health2 from "../../assets/health2.png";
import { PrimaryButton } from "@fluentui/react";
import { Card } from "@fluentui/react-components/unstable";

class RightSideBar extends React.Component {
  render() {
    return (
      <div className={styles.rightSideBar}>
        <Divider vertical></Divider>
        <div className={styles.rightBars}>
          <Heading heading="Your Cards"></Heading>
          <p className={styles.subHeading}>Add and manage cards here</p>
          <Card className={styles.card}>
            <img src={car} alt="" className={styles.insuranceCards} />
          </Card>
          <Card className={styles.card}>
            <img src={health1} alt="" className={styles.insuranceCards} />
          </Card>
          <Card className={styles.card}>
            <img src={health2} alt="" className={styles.insuranceCards} />
          </Card>
          <PrimaryButton className={styles.addCardButton}>
            Add Card +
          </PrimaryButton>
          <a href="" className={styles.knowMore}>
            Know More
          </a>
        </div>
      </div>
    );
  }
}

export default RightSideBar;
