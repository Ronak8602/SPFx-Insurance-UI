import * as React from "react";
import styles from "../App.module.scss";

class Profile extends React.Component {
  render() {
    return (
      <div className={styles.profile}>
        <div className={styles.profileName}>
          <p>John Samuel</p>
        </div>
        <div className={styles.profileIcon}></div>
      </div>
    );
  }
}

export default Profile;
