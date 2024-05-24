import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserDetails from "../components/UserDetails";
import RegistrationForm from "../components/Forms/RegistrationForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RegistrationForm />,
      },
      {
        path: "/home",
        element: <UserDetails />,
      },
    ],
  },
]);