import * as React from 'react';
import { Divider } from "@fluentui/react-components";
import styles from  "./LeftSideBar.module.scss";
import NavCardList from "./NavCardList";
import Heading from "../Other Components/Heading";
import menu from "../../assets/menu.png";
import { PrimaryButton } from "@fluentui/react";

class LeftSideBar extends React.Component {
  render() {
    return (
      <div className={styles.leftSideBar}>
        <div className={styles.leftBars}>
          <div>
            <NavCardList></NavCardList>
          </div>

          <div>
            <Heading heading="Top Up"></Heading>
            <p className={styles.subHeading}>Add money to your wallet</p>

            <div className={styles.topUpCard}>
              <img src={menu} alt="menu" className={styles.menu} />
              <div>
                <p className={styles.currentBalance}>Current Balance</p>
                <p className={styles.balance}>$ 1098.78</p>
                <PrimaryButton className={styles.addMoneyButton}>
                  Add Money +
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
        <Divider vertical></Divider>
      </div>
    );
  }
}

export default LeftSideBar;
