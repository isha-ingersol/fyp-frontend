import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/index.jsx";
import Error from "./components/error.jsx";
import Layout from "./components/Helper/Layout.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/how-it-works",
        element: <Main />  // Loads full home page, then auto-scrolls
      },
      {
        path: "/error",
        element: <Error />
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
