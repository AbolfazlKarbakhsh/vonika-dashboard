import { createBrowserRouter } from "react-router-dom";

//? --------------------- Layouts --------------------- 

// Layout Auth
import IdentityLayout from "@/layouts/auth/IdentityLayout";

// Layout Dashboard
import DashboardLayout from "./layouts/dashboard/DashboardMainLayout";

//? ---------------------- Pages --------------------- 

// Auth page for Routing
import LoginMain from "@/features/auth/LoginMain";

// dashboard pages for Routing
import Home from "@/pages/Home/Home";

// global Routes
import NotFound from "@/pages/NotFound";


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
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <LoginMain />,
        errorElement: <LoginMain />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
