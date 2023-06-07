import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AllCoursespage from "../pages/AllCoursespage";
import MainCoursepage from "../pages/MainCoursepage";
import SubCoursepage from "../pages/SubCoursepage";
import DemoTeachpage from "../pages/DemoTeachpage";
import Loginpage from "../pages/Loginpage";
import Registerpage from "../pages/Registerpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // children: [],
  },
  {
    path: "/allcourse",
    element: <AllCoursespage />,
    // children: [],
  },
  {
    path: "/maincourse",
    element: <MainCoursepage />,
    // children: [],
  },
  {
    path: "/subcourse",
    element: <SubCoursepage />,
    // children: [],
  },
  {
    path: "/teststudy",
    element: <DemoTeachpage />,
    // children: [],
  },
  {
    path: "/login",
    element: <Loginpage />,
    // children: [],
  },
  {
    path: "/register",
    element: <Registerpage />,
    // children: [],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
