import * as React from 'react';
import styles from "./LeftSideBar.module.scss";

class NavCard extends React.Component<
  { icon: React.ReactNode; title: string },
  any
> {
  render() {
    return (
      <div className={styles.navCard}>
        {this.props.icon}
        <p className={styles.navCardTitle}>{this.props.title}</p>
      </div>
    );
  }
}

export default NavCard;
