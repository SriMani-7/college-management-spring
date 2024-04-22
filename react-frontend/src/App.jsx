import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ForgetPasswordPage from "./pages/ForgetPassowrd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: '/forgetpassowrd',
    element: <ForgetPasswordPage/>
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
