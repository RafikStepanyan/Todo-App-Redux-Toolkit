import { useRoutes } from "react-router";
import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import { Details } from "../pages/Details";

export const UseRoutes = () => {
  const router = useRoutes([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "",
        },
        {
          element: <Details />,
          path: "/details/:id",
        },
        {
          element: <Error />,
          path: "*",
        },
      ],
    },
  ]);
  return router;
};
