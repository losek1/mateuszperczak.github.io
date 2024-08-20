import App from "@components/app/App";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const Updates = lazy(() => import("../pages/Updates/Updates"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const AboutMe = lazy(() => import("../pages/AboutMe/AboutMe"));
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));

// const Blog = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("../pages/Blog")), 3000);
//   });
// });

// const PageNotFound = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("../pages/PageNotFound")), 6000);
//   });
// });

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/updates",
        element: <Updates />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },

      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
