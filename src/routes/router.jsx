import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "./Error";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
