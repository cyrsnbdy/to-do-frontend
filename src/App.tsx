import Loading from "@/pages/authentication/components/Loading";
import Splashscreen from "@/pages/authentication/components/Splashscreen";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChangePassword from "./pages/authentication/ChangePassword";
import ConfirmCode from "./pages/authentication/ConfirmCode";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Tasks from "./pages/manage-tasks/Tasks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Splashscreen,
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/signup",
      Component: Signup,
    },
    {
      path: "/tasks",
      Component: Tasks,
    },
    {
      path: "/loading",
      Component: Loading,
    },
    {
      path: "/forgot-password",
      Component: ForgotPassword,
    },
    {
      path: "/send-code",
      Component: ConfirmCode,
    },
    {
      path: "/change-password",
      Component: ChangePassword,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
