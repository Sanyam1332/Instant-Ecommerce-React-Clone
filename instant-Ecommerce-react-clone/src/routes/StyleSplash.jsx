import { useSelector } from "react-redux";
import StyleSplashItems from "../components/StyleSplashItems";

const StyleSplash = () => {
  const stylesplashItems = useSelector((state) => state.stylesplash);
  return (
    <main>
      <div className="items-container">
        {stylesplashItems.map((item) => (
          <StyleSplashItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default StyleSplash;
