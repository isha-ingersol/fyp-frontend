import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/index.jsx";
import Error from "./components/error.jsx";
import Layout from "./components/Layout.jsx";
import AssessmentComponent from "./components/Assessments/Assessment.jsx";

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
        path: "/how-it-works",
        element: <Main />
      },
      {
        path: "/learn-more",
        element: <Main />
      },
      {
        path: "/assessment",
        element: <AssessmentComponent />
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
  return <RouterProvider router={router} />;
}

export default Router;
