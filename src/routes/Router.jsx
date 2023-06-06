import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
