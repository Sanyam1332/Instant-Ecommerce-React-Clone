import { Link } from "react-router-dom";

const Locally = () => {
  return (
    <div className="localContainer">
      <Link
        to="/DesignerDen"
        className="card localBanner"
        style={{
          width: "25rem",
          height: "40rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
      >
        <img
          src="images/localBanner1.png"
          className="card-img-top"
          alt="..."
          style={{ width: "25rem", height: "40rem" }}
        />
      </Link>
      <Link
        to="/trendytrinkets"
        className="card localBanner"
        style={{
          width: "25rem",
          height: "40rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
      >
        <img
          src="images/localBanner2.png"
          className="card-img-top"
          alt="..."
          style={{ width: "25rem", height: "40rem" }}
        />
      </Link>
      <Link
        to="/stylesplash"
        className="card localBanner"
        style={{
          width: "25rem",
          height: "40rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
      >
        <img
          src="images/localBanner3.png"
          className="card-img-top"
          alt="..."
          style={{ width: "25rem", height: "40rem" }}
        />
      </Link>
      <Link
        to="/urbannest"
        className="card localBanner"
        style={{
          width: "25rem",
          height: "40rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
      >
        <img
          src="images/localBanner4.png"
          className="card-img-top"
          alt="..."
          style={{ width: "25rem", height: "40rem" }}
        />
      </Link>
      <Link
        to="/"
        className="card localBanner"
        style={{
          width: "25rem",
          height: "40rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
      >
        <img
          src="images/localBanner5.png"
          className="card-img-top"
          alt="..."
          style={{ width: "25rem", height: "40rem" }}
        />
      </Link>
      <Link
        to="/"
        className="card localBanner"
        style={{
          width: "25rem",
          height: "40rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
      >
        <img
          src="images/localBanner6.png"
          className="card-img-top"
          alt="..."
          style={{ width: "25rem", height: "40rem" }}
        />
      </Link>
    </div>
  );
};

export default Locally;
