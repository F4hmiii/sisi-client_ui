import BalancePage from "./pages/balance";
import DashboardPage from "./pages/dashboard";
import ErrorRoute from "./pages/errorPage";
import ForgotPage from "./pages/forgot";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TransactionPage from "./pages/transaction";
import GoalPage from "./pages/goalpage";
const myRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Navigate to="/login" replace />, // diarahkan otomatis ke /login
  //   errorElement: <ErrorRoute/>
  // },
  {
    path: "/",
    element: <DashboardPage />, 
    errorElement: <ErrorRoute/>
  },
  {
    path: "/login",
    element: <SignInPage/>,
  },
  {
    path: "/register",
    element: <SignUpPage/>,
  },
  {
    path: "/forgot",
    element: <ForgotPage/>
  },
  {
    path: "/balance",
    element: <BalancePage />
  },
  {
    path: "/transaction",
    element: <TransactionPage/>
  },
  {
    path: "/goals",
    element: <GoalPage/>
  }
]);

const App = () => {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;