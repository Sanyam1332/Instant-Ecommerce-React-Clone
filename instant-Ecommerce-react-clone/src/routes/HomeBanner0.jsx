import { useSelector } from "react-redux";
import WomensItems from "../components/WomensItems";

const HomeBanner0 = () => {
  const womensItems = useSelector((state) => state.womens);

  return (
    <main>
      <div className="items-container">
        {womensItems.map((item) => (
          <WomensItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default HomeBanner0;
