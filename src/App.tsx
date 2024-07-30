import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { MainLayout } from "./pages/MainLayout/MainLayout";
import { NewUser } from "./pages/NewUser/NewUser";
import { PropertyDetails } from "./pages/PropertyDetails/PropertyDetails";
import { PropertyList } from "./pages/PropertyList/PropertyList";
import { QuickMortgage } from "./pages/QuickMortgage/QuickMortgage";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <PropertyList />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/newuser",
          element: <NewUser />,
        },
        {
          path: "/:id",
          element: <PropertyDetails />,
        },
        {
          path: "/quickmortgage",
          element: <QuickMortgage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
