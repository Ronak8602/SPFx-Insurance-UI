import * as React from 'react';
import { ArrowRight16Regular } from "@fluentui/react-icons";
import styles from "./Content.module.scss"

class ClaimCard extends React.Component {
  render() {
    return (
      <div className={styles.claimCard}>
        <div className={styles.claimHeader}>
          <p className={styles.claimHeading}>Health Insurance Claim</p>
          <ArrowRight16Regular className={styles.arrow} />
        </div>
        <p className={styles.claimAccount}>43782674567</p>
        <p className={styles.claimMoney}>$ 2347.08</p>
        <div className={styles.progress_track}>
          <ul id="progressbar">
            <li className="step0 active " id="step1">
              Initiated
            </li>
            <li className="step0 active text-center" id="step2">
              Verified
            </li>
            <li className="step0 active text-right" id="step3">
              <span id="three">Processing</span>
            </li>
            <li className="step0 text-right" id="step4">
              Settled
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ClaimCard;
