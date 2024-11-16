import { useSelector } from "react-redux";
import UrbanNestItems from "../components/UrbanNestItems";

const UrbanNest = () => {
  const urbannestItems = useSelector((state) => state.urbannest);
  return (
    <main>
      <div className="items-container">
        {urbannestItems.map((item) => (
          <UrbanNestItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default UrbanNest;
