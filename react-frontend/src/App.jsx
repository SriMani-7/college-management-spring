import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ForgetPasswordPage from "./pages/ForgetPassowrd";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="forgetpassowrd" element={<ForgetPasswordPage />} />

      {/** protected student navigation routes */}
      <Route element={<ProtectedRoute role="STUDENT" />}>
        <Route path="student">
          <Route index element={<>Student dashboard</>} />
        </Route>
      </Route>

      {/** protected faculty navigation routes */}
      <Route element={<ProtectedRoute role="FACULTY" />}>
        <Route path="faculty">
          <Route index element={<>Faculty dashboard</>} />
        </Route>
      </Route>

      {/** protected admin navigation routes */}
      <Route element={<ProtectedRoute role="ADMIN" />}>
        <Route path="admin">
          <Route index element={<>Admin dashboard</>} />
        </Route>
      </Route>

    </Route>
  )
);

function ProtectedRoute({ role }) {
  const ut = localStorage.getItem("userType");
  return ut === role ? <Outlet /> : <>You are not authorized to access this page</>;
}

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
