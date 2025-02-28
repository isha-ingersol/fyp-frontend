import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import Home from "./components/Main/Home.jsx";
import Home from "./components/Main/index.jsx";
import HomeDark from "./components/HomeDark/index.jsx";
import News from "./components/News/index.jsx";
import SingleNews from "./components/News/SingleNews.jsx";
import Service from "./components/Service/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Error from "./components/Error/index.jsx";
import AboutUsTwo from "./components/AboutUs/AboutUsTwo.jsx";
import Shops from "./components/Shops/index.jsx";
import ShopDetails from './components/Shops/Details';
import Layout from "./components/Helper/Layout.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        path: "/home-dark",
        element: <HomeDark />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/news/single-news",
        element: <SingleNews />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/error",
        element: <Error />
      },
      {
        path: "/about-us-another",
        element: <AboutUsTwo />
      },
      {
        path: "/shops",
        element: <Shops />
      },
      {
        path: "/shops/shop-details",
        element: <ShopDetails />
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
