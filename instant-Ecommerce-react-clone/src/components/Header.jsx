import { IoPersonSharp } from "react-icons/io5";

import { FaFaceGrinHearts } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const wishlist = useSelector((store) => store.wishlist);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            style={{ height: 120 }}
            className="myntra_home"
            src="../images/Instant-_processed.png"
            alt="instant Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to={"/mens"}>Men</Link>
        <Link to={"/womens"}>Women</Link>
        <Link to={"/kids"}>Kids</Link>
        <Link to={"/home&Living"}>Home & Living</Link>
        <Link to={"/beauty"}>Beauty</Link>
        <Link to={"/locally"}>
          Locally <sup>New</sup>
        </Link>
      </nav>
      <div className="search_bar">
        <input
          className="search_input "
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <Link className="action_container" to={"/profile"}>
          <IoPersonSharp style={{ backgroundColor: "#DEE5D4" }} />
          <span className="action_name">Profile</span>
        </Link>
        <Link className="action_container" to={"/wishlist"}>
          <FaFaceGrinHearts
            style={{ backgroundColor: "#DEE5D4", color: "black" }}
          />
          <span className="action_name" style={{ color: "black" }}>
            Wishlist
          </span>
          <span className="wishlist-item-count">{wishlist.length}</span>
        </Link>
        <Link className="action_container" to="/bag">
          <IoBagHandleSharp
            style={{ backgroundColor: "#DEE5D4", color: "black" }}
          />
          <span className="action_name " style={{ color: "black" }}>
            Bag
          </span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
