import { createBrowserRouter } from "react-router-dom";
import ListedItems from "./pages/products/AllItemsPage";
import DetailedItem from "./pages/products/DetailedItem";
import Login from "./pages/user/Login";
import ShoppingCart from "./pages/pay/ShoppingCart";
import Payment from "./pages/pay/Payment";
import FindUserPassword from "./pages/user/FindUserPassword";
import FindUserId from "./pages/user/FindUserId";
import FAQ from "./pages/faq/FAQ";
import FAQDetail from "./pages/faq/FAQDetail";
import CenterLayout from "./components/CenterLayout";
import WriteFAQ from "./pages/faq/WriteFAQ";
import PaymentSuccess from "./pages/pay/PaymentSuccess";
import Join from "./pages/user/Join";
import Profile from "./pages/user/Profile";
import ErrorComponent from "./components/ErrorComponent";
import MainPage from "./pages/home/MainPage";
import SharedLayout from "./pages/products/components/SharedLayout";
import AllItemsPage from "./pages/products/AllItemsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/items",
    element: <SharedLayout />,
    children: [
      {
        path: "/items/all",
        element: <AllItemsPage />,
      },
      {
        path: "/items/category/:category",
      },
      {
        path: "/items/search",
      },
    ],
  },
  {
    path: "/items/:id",
    element: <DetailedItem />,
  },
  // home, products page

  {
    path: "/users",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <ErrorComponent />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "find/id",
        element: <FindUserId />,
      },
      {
        path: "find/password",
        element: <FindUserPassword />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  // user page

  {
    path: "/cart",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "/payment",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <Payment />,
      },
      {
        path: "success",
        element: <PaymentSuccess />,
      },
    ],
  },

  //pay page

  {
    path: "/faq",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <FAQ />,
      },
      {
        path: "write",
        element: <WriteFAQ />,
      },
      {
        path: ":id",
        element: <FAQDetail />,
      },
    ],
  },
  //faq page
]);

export default router;
