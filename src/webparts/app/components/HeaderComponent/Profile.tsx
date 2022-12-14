import * as React from "react";
import styles from "../App.module.scss";

class Profile extends React.Component<{ name: string }, {}>  {
  render(): React.ReactElement<{ name: string }>{
    return (
      <div className={styles.profile}>
        <div className={styles.profileName}>
          <p>{this.props.name}</p>
        </div>
        <div className={styles.profileIcon}></div>
      </div>
    );
  }
}

export default Profile;
