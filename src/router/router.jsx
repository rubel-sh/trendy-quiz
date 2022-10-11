import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Quiz from "../components/Topics/Quiz";
import Topics from "../components/Topics/Topics";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Topics />,
            loader: async () =>
              fetch("https://openapi.programming-hero.com/api/quiz"),
            children: [
              {
                path: ":id",
                element: <Quiz />,
                loader: async ({ params }) =>
                  fetch(`https://openapi.programming-hero.com/api/quiz/1`),
              },
            ],
          },
        ],
      },
      {
        path: "/quiz",
        element: <Topics />,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        children: [],
      },
      {
        path: "/quiz/:id",
        element: <Quiz></Quiz>,
        loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      { path: "/blogs", element: <Blogs /> },
    ],
  },
]);
