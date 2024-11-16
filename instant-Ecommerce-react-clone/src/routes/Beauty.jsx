import { useSelector } from "react-redux";
import BeautyItems from "../components/BeautyItems";

const Beauty = () => {
  const beautyItems = useSelector((state) => state.beauty);

  return (
    <main>
      <div className="items-container">
        {beautyItems.map((item) => (
          <BeautyItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Beauty;
