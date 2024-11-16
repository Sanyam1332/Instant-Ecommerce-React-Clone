import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/mens">Men</Link>
          <Link to="/womens">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/home&Living">Home & Living</Link>
          <Link to="/beauty">Beauty</Link>
        </div>

        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/mens">Men</Link>
          <Link to="/womens">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/home&Living">Home & Living</Link>
          <Link to="/beauty">Beauty</Link>
        </div>

        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/mens">Men</Link>
          <Link to="/womens">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/home&Living">Home & Living</Link>
          <Link to="/beauty">Beauty</Link>
        </div>
      </div>
      <hr />

      <div className="copyright">
        © 2024 www.instant.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
