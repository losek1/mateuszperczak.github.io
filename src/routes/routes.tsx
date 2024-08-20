import { App } from "@components/index";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const Updates = lazy(() => import("../pages/updates/Updates"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const AboutMe = lazy(() => import("../pages/aboutMe/AboutMe"));
const PageNotFound = lazy(() => import("../pages/pageNotFound/PageNotFound"));

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
