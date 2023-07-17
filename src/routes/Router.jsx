import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import AllCoursespage from "../pages/AllCoursespage";
import MainCoursepage from "../pages/MainCoursepage";
import SubCoursepage from "../pages/SubCoursepage";
import DemoTeachpage from "../pages/DemoTeachpage";
import Loginpage from "../pages/Loginpage";
import Registerpage from "../pages/Registerpage";
import Userpage from "../pages/Userpage";
import M3page from "../pages/CourseDetailpage";
import CourseDetailpage from "../pages/CourseDetailpage";
import Adminpage from "../pages/Adminpage";
import SubCourseDetailpage from "../pages/SubCourseDetailpage";
import ChangePasswordpage from "../pages/ChangePasswordpage";
import ForgetPasswordpage from "../pages/ForgetPasswordpage";
import { useAuth } from "../contexts/AuthContext";
import EditCourse from "../pages/EditCourse";
import Paymentpage from "../pages/Paymentpage";

export default function Router() {
  const { user } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/allcourse",
      element: <AllCoursespage />,
    },
    {
      path: "/maincourse",
      element: <MainCoursepage />,
    },
    {
      path: "/subcourse",
      element: <SubCoursepage />,
    },
    {
      path: "/demoteach",
      element: <DemoTeachpage />,
    },
    {
      path: "/login",
      //   element: <Loginpage />,
      element: user ? <Navigate to="/" /> : <Loginpage />,
    },
    {
      path: "/changepassword",
      element: user ? <Navigate to="/changepassword" /> : <Loginpage />,
      // children: [],
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Registerpage />,
      // children: [],
    },
    {
      path: "/forgetpassword",
      element: <ForgetPasswordpage />,
      // children: [],
    },
    {
      path: "/userpage",
      //   element: <Userpage />,
      element: user ? <Userpage /> : <Homepage />,
      // children: [],
    },
    {
      path: "/coursedetail/:id",
      element: <CourseDetailpage />,
      // children: [],
    },
    {
      path: "/subcoursedetail",
      element: <SubCourseDetailpage />,
      // children: [],
    },
    {
      path: "/admin",
      // element: <Adminpage />,
      element: user ? <Adminpage /> : <Homepage />,
      // children: [],
    },
    {
      path: "/editcourse/:id",
      // element: <Adminpage />,
      element: <EditCourse />,
      // children: [],
    },
    {
      path: "/payment",
      // element: <Adminpage />,
      element: <Paymentpage />,
      // children: [],
    },
  ]);

  return <RouterProvider router={router} />;
}
