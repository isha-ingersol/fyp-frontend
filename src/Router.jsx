import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Error from "./components/Error/index.jsx";
import AboutUsTwo from "./components/AboutUs/AboutUsTwo.jsx";
import Layout from "./components/Helper/Layout.jsx";

// import HomeDark from "./components/HomeDark/index.jsx";
// import News from "./components/News/index.jsx";
// import SingleNews from "./components/News/SingleNews.jsx";
// import Service from "./components/Service/index.jsx";
// import Shops from "./components/Shops/index.jsx";
// import ShopDetails from './components/Shops/Details';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <Main />  // Loads full home page
      },
      {
        path: "/home",
        element: <Main />  // Loads full home page
      },
      {
        path: "/how-it-works",
        element: <Main />  // Loads full home page, then auto-scrolls
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
        path: "*",
        element: <Error />
      },
      {
        path: "/about-us-another",
        element: <AboutUsTwo />
      },

      // Uncomment these if you need them later
      // {
      //   path: "/news",
      //   element: <News />
      // },
      // {
      //   path: "/news/single-news",
      //   element: <SingleNews />
      // },
      // {
      //   path: "/service",
      //   element: <Service />
      // },
      // {
      //   path: "/shops",
      //   element: <Shops />
      // },
      // {
      //   path: "/shops/shop-details",
      //   element: <ShopDetails />
      // },
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
