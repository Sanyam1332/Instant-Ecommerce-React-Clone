import { useSelector } from "react-redux";
import HomeLivingItems from "../components/Home&LivingItems";

const HomeLiving = () => {
  const homeLivingItems = useSelector((state) => state.homeLiving);

  return (
    <main>
      <div className="items-container">
        {homeLivingItems.map((item) => (
          <HomeLivingItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default HomeLiving;
