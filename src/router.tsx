import { createBrowserRouter } from "react-router-dom";

// Layout Auth

// Layout Dashboard

// dashboard for Routing
import Home from "@/pages/Home/Home";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";


const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        errorElement: <Home />,
        index: true,
      },
    ],
  },
  // {
  //   element: <IdentityLayout />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <LoginMainNumber />,
  //       errorElement: <LoginMainNumber />,
  //     },
  //     {
  //       path: 'login/otp/:phone',
  //       element: <LoginMainOtp />,
  //       errorElement: <LoginMainOtp />,
  //     }
  //   ],
  // },
  // {
  //   path: "*",
  //   element: <Page404 />,
  // },
]);

export default router;
