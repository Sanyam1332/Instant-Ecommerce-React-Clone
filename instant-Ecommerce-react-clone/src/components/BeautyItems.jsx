import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { VscDiffAdded } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { wishlistActions } from "../store/wishlistSlice";
import { FaHeart } from "react-icons/fa";

const BeautyItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const wishlistItems = useSelector((state) => state.wishlist);
  const bagElementFound = bagItems.indexOf(item.id) >= 0;

  const wishlistElementFound = wishlistItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addBagItem(item.id));
  };
  const handleRemoveBagItem = () => {
    dispatch(bagActions.removeBagItem(item.id));
  };

  const handleAddToWishlist = () => {
    dispatch(wishlistActions.addWishlistItem(item.id));
  };
  const handleRemoveWishlistItem = () => {
    dispatch(wishlistActions.removeWishlistItem(item.id));
  };

  return (
    <div className="item-container">
      <div className="imageCartContainer">
        <img className="item-image" src={item.image} alt="item image" />
        {bagElementFound ? (
          <button
            type="button"
            className="btn-add-bag btn btn-danger"
            style={{
              color: "black",
              fontSize: "18px",
              backgroundColor: "#e4dca4",
              borderRadius: "0%",
              border: "1px solid black",
              padding: "5px 15px",
            }}
            onClick={handleRemoveBagItem}
          >
            <MdDelete style={{ color: "black", backgroundColor: "#e4dca4" }} />{" "}
            Remove from Cart
          </button>
        ) : (
          <button
            type="button"
            className="btn-add-bag btn btn-success"
            style={{
              color: "black",
              fontSize: "18px",
              backgroundColor: "#fef9d9",
              borderRadius: "0%",
              padding: "5px 15px",
            }}
            onClick={handleAddToBag}
          >
            <VscDiffAdded
              style={{ color: "black", backgroundColor: "#fef9d9" }}
            />{" "}
            Add to Cart
          </button>
        )}
      </div>
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
        {wishlistElementFound ? (
          <FaHeart
            className="wishIcon-del"
            onClick={handleRemoveWishlistItem}
          />
        ) : (
          <CiHeart className="wishIcon" onClick={handleAddToWishlist} />
        )}
      </div>

      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
    </div>
  );
};

export default BeautyItems;
