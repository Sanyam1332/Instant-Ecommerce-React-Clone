import { useSelector } from "react-redux";
import ShoesItems from "../components/ShoesItems";

const HomeBanner1 = () => {
  const shoesItems = useSelector((state) => state.shoes);
  return (
    <main>
      <div className="items-container">
        {shoesItems.map((item) => (
          <ShoesItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default HomeBanner1;
