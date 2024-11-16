import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BagSummary = () => {
  const bagItemsIds = useSelector((state) => state.bag);

  const items = useSelector((state) => state.items);
  const mens = useSelector((state) => state.mens);
  const womens = useSelector((state) => state.womens);
  const kids = useSelector((state) => state.kids);
  const homeLiving = useSelector((state) => state.homeLiving);
  const beauty = useSelector((state) => state.beauty);
  const designerden = useSelector((state) => state.designerDen);
  const shoes = useSelector((state) => state.shoes);
  const trendytrinkets = useSelector((state) => state.trendytrinkets);
  const stylesplash = useSelector((state) => state.stylesplash);
  const urbannest = useSelector((state) => state.urbannest);

  const homeItems = items.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  const mensItems = mens.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  const womensItems = womens.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  const kidsItems = kids.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  const homeLivingItems = homeLiving.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  const beautyItems = beauty.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const designerdenItems = designerden.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const shoesItems = shoes.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const trendytrinketsItems = trendytrinkets.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const stylesplashItems = stylesplash.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const urbannestItems = urbannest.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const finalItems = [
    ...homeItems,
    ...mensItems,
    ...womensItems,
    ...kidsItems,
    ...homeLivingItems,
    ...beautyItems,
    ...designerdenItems,
    ...shoesItems,
    ...trendytrinketsItems,
    ...stylesplashItems,
    ...urbannestItems,
  ];

  let totalItem = bagItemsIds.length;
  let CONVENIENCE_FEES;
  {
    totalItem > 0 ? (CONVENIENCE_FEES = 99) : (CONVENIENCE_FEES = 0);
  }
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <Link to="/checkout">
        <button className="btn-place-order ">PLACE ORDER</button>
      </Link>
    </>
  );
};

export default BagSummary;
