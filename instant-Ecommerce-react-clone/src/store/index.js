import { configureStore, createSlice } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSilce";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import wishlistSlice from "./wishlistSlice";
import mensSlice from "./mensSlice";
import womensSlice from "./womensSlice";
import kidsSlice from "./kidsSlice";
import homeLivingSlice from "./home&LivingSlice";
import beautySlice from "./beautySlice";
import designerDenSlice from "./designerDenSlice";
import shoesSlice from "./shoesSlice";
import trendytrinketsSlice from "./trendytrinketsSlice";

import urbannestSlice from "./urbannestSlice";
import stylesplashSlice from "./stylesplashSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
    wishlist: wishlistSlice.reducer,
    mens: mensSlice.reducer,
    womens: womensSlice.reducer,
    kids: kidsSlice.reducer,
    homeLiving: homeLivingSlice.reducer,
    beauty: beautySlice.reducer,
    designerDen: designerDenSlice.reducer,
    shoes: shoesSlice.reducer,
    trendytrinkets: trendytrinketsSlice.reducer,
    stylesplash: stylesplashSlice.reducer,
    urbannest: urbannestSlice.reducer,
  },
});
export default myntraStore;
