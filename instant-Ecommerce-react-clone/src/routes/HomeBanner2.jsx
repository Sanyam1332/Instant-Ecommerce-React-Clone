import { useSelector } from "react-redux";
import TrendyTrinketsItems from "../components/TrendyTrinketsItems";

const HomeBanner2 = () => {
  const trendytrinketsItems = useSelector((state) => state.trendytrinkets);
  return (
    <main>
      <div className="items-container">
        {trendytrinketsItems.map((item) => (
          <TrendyTrinketsItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default HomeBanner2;
