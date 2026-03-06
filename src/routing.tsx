import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error404 from "./_/error404";

const routes = [
  {
    path: "/",
    errorElement: <Error404 />,
    lazy: () => import("./_"),
  },
];

function Routing() {
  const router = useMemo(() => createBrowserRouter(routes), []);
  return <RouterProvider router={router} />;
}

export default Routing;
