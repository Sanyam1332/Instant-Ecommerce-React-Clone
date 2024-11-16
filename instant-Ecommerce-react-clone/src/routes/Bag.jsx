import { useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
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
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  const mensItems = mens.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  const womensItems = womens.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  const kidsItems = kids.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  const homeLivingItems = homeLiving.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  const beautyItems = beauty.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const designerdenItems = designerden.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const shoesItems = shoes.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const trendytrinketsItems = trendytrinkets.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const stylesplashItems = stylesplash.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const urbannestItems = urbannest.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
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

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems item={item} />
          ))}
        </div>
        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </main>
  );
};
export default Bag;
