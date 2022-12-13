import * as React from "react";
import { ArrowRotateClockwise20Filled } from "@fluentui/react-icons";
import styles from "./Content.module.scss";

class BookingCard extends React.Component {
  render() {
    return (
      <div className={styles.bookingCard}>
        <div className={styles.bookingCardLogo}>
          <ArrowRotateClockwise20Filled />
        </div>
        {/* add a class */}
        <div>
          <p className={styles.bookingCardDetailHeading}>
            Booked Doctor Consultation
          </p>
          <p className={styles.bookingCardDetailSubHeading}>3rd August 2022</p>
        </div>
      </div>
    );
  }
}

export default BookingCard;
