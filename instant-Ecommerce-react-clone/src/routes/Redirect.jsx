import styles from "../styles/confetti.module.css";
import { Link } from "react-router-dom";
const Redirect = () => {
  return (
    <div className={styles.confetti}>
      <div className={styles.orderPlaced}>
        <h1>
          <b>Your Order is Placed Successfully </b>
        </h1>
        <Link to={"/"}>
          <button
            type="button"
            style={{ margin: "1rem", marginLeft: "13rem" }}
            className="btn btn-outline-success btn-lg"
          >
            Back To Shopping
          </button>
        </Link>
      </div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
      <div className={styles.confettiPiece}></div>
    </div>
  );
};

export default Redirect;
