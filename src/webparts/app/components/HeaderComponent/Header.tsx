import * as React from "react";
import styles from "../App.module.scss";
import { Divider } from "@fluentui/react-components";
import { Alert20Filled, Settings20Filled } from "@fluentui/react-icons";
import logo from "../../assets/logo.png";
import Profile from "./Profile";

class Header extends React.Component<{ name: string }, {}> {
  render(): React.ReactElement<{ name: string }> {
    console.log(this.props.name);
    return (
      <div className={styles.navbar}>
        <div className={styles.row_space_between}>
          <div className={styles.row}>
            <img src={logo} alt="" className={styles.logo} />
            <p className={styles.heading}>TITLE</p>
          </div>
          <div className={styles.row}>
            <Alert20Filled className={styles.setIconColor}></Alert20Filled>
            <Settings20Filled
              className={styles.setIconColor}
            ></Settings20Filled>
            <Profile name={this.props.name}></Profile>
          </div>
        </div>
        <Divider className={styles.divider}></Divider>
      </div>
    );
  }
}

export default Header;
