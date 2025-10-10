import { createBrowserRouter } from "react-router-dom";

// Layout Auth

// Layout main
import DashboardMain from "@/layouts/dashboard/DashboardMain";

// dashboard for Routing
import Home from "@/pages/Home/Home";


const router = createBrowserRouter([
  {
    element: <DashboardMain />,
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
