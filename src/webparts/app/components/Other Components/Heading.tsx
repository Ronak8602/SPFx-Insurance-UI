import * as React from "react";
import styles from "../App.module.scss";

class Heading extends React.Component<{ heading: string }, any> {
  render() {
    return <p className={styles.headingCard}>{this.props.heading}</p>;
  }
}

export default Heading;
