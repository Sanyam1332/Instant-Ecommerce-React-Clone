import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/itemsSilce";
import { useEffect } from "react";
import { mensActions } from "../store/mensSlice";
import { womensActions } from "../store/womensSlice";
import { kidsActions } from "../store/kidsSlice";
import { homeLivingActions } from "../store/home&LivingSlice";
import { beautyActions } from "../store/beautySlice";
import { designerDenActions } from "../store/designerDenSlice";
import { shoesActions } from "../store/shoesSlice";
import { trendytrinketsActions } from "../store/trendytrinketsSlice";

import { urbannestActions } from "../store/urbannestSlice";
import { stylesplashActions } from "../store/stylesplashSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
        dispatch(mensActions.addInitialItems(items[1].mensItems));
        dispatch(womensActions.addInitialItems(items[2].womensItems));
        dispatch(kidsActions.addInitialItems(items[3].kidsItems));
        dispatch(homeLivingActions.addInitialItems(items[4].homeLivingItems));
        dispatch(beautyActions.addInitialItems(items[5].beautyItems));
        dispatch(shoesActions.addInitialItems(items[6].shoesItems));
        dispatch(designerDenActions.addInitialItems(items[7].designerDenItems));
        dispatch(
          trendytrinketsActions.addInitialItems(items[8].trendytrinketsItems)
        );
        dispatch(stylesplashActions.addInitialItems(items[9].stylesplashItems));
        dispatch(urbannestActions.addInitialItems(items[10].urbannestItems));
      });
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
