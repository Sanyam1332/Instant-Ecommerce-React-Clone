import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Bag from "./routes/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Wishlist from "./routes/Wishlist.jsx";
import Mens from "./routes/Mens.jsx";
import Womens from "./routes/Womens.jsx";
import Kids from "./routes/Kids.jsx";
import HomeLiving from "./routes/Home&Living.jsx";
import Beauty from "./routes/Beauty.jsx";
import Profile from "./routes/Profile.jsx";
import Locally from "./routes/Locally.jsx";
import DesignerDen from "./routes/DesignerDen.jsx";
import TrendyTrinkets from "./routes/TrendyTrinkets.jsx";
import StyleSplash from "./routes/StyleSplash.jsx";
import UrbanNest from "./routes/UrbanNest.jsx";
import Checkout from "./routes/Checkout.jsx";
import Redirect from "./routes/Redirect.jsx";
import HomeBanner0 from "./routes/HomeBanner0.jsx";
import HomeBanner1 from "./routes/HomeBanner1.jsx";
import HomeBanner2 from "./routes/HomeBanner2.jsx";
import HomeBanner3 from "./routes/HomeBanner3.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/bag", element: <Bag /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/mens", element: <Mens /> },
      { path: "/womens", element: <Womens /> },
      { path: "/kids", element: <Kids /> },
      { path: "/home&Living", element: <HomeLiving /> },
      { path: "/beauty", element: <Beauty /> },
      { path: "/profile", element: <Profile /> },
      { path: "/locally", element: <Locally /> },
      { path: "/homeBanner0", element: <HomeBanner0 /> },
      { path: "/homeBanner1", element: <HomeBanner1 /> },
      { path: "/homeBanner2", element: <HomeBanner2 /> },
      { path: "/homeBanner3", element: <HomeBanner3 /> },
      { path: "/designerden", element: <DesignerDen /> },
      { path: "/trendytrinkets", element: <TrendyTrinkets /> },
      { path: "/stylesplash", element: <StyleSplash /> },
      { path: "/urbannest", element: <UrbanNest /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/redirect", element: <Redirect /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
