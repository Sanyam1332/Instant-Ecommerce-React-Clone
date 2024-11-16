import { Link } from "react-router-dom";

const Profile = () => {
  const handleLogin = () => {
    alert("You logged in");
  };
  return (
    <div
      className="card profile"
      style={{
        width: "28rem",
        height: "36rem",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <img src="images/banner.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title head-login">
          <b>Login </b> or <b>Sign up</b>
        </h5>
        <div className="input-group mb-3 mobile-input">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            +91
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            required
          />
        </div>
        <p className="para-terms">
          By continuing this, I agree to the <b>terms of use</b> &{" "}
          <b>Privacy Policy</b>
        </p>
        <Link to="/">
          <button className="bs-btn-bg" onClick={handleLogin}>
            CONTINUE
          </button>
        </Link>
        <p className="para-help">
          Have trouble logging in? <b>Get help</b>{" "}
        </p>
      </div>
    </div>
  );
};

export default Profile;
