import { useSelector } from "react-redux";
import KidsItems from "../components/KidsItems";

const Kids = () => {
  const kidsItems = useSelector((state) => state.kids);

  return (
    <main>
      <div className="items-container">
        {kidsItems.map((item) => (
          <KidsItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Kids;
