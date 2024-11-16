import { useSelector } from "react-redux";
import MensItems from "../components/MensItems";

const Mens = () => {
  const mensItems = useSelector((state) => state.mens);

  return (
    <main>
      <div className="items-container">
        {mensItems.map((item) => (
          <MensItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Mens;
