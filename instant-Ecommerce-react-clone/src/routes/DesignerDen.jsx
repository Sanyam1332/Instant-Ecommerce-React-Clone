import { useSelector } from "react-redux";
import DesignerDenItems from "../components/DesignerDenItems";

const DesignerDen = () => {
  const designerDenItems = useSelector((state) => state.designerDen);

  return (
    <main>
      <div className="items-container">
        {designerDenItems.map((item) => (
          <DesignerDenItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default DesignerDen;
