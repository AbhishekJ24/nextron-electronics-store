import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./components/Additional/ErrorPage.jsx";
import Home from "./components/pages/Home/page.jsx";
import TrendingPage from "./components/pages/Trending/page.jsx";
import ProductsPage from "./components/pages/Products/page.jsx";
import ContactPage from "./components/pages/ContactUs/page.jsx";
import CartPage from "./components/pages/Cart/page.jsx";
import WishlistPage from "./components/pages/Wishlist/page.jsx";
import FilterProductPage from "./components/pages/FilterProducts/page.jsx";
import ProductViewPage from "./components/pages/ProductView/page.jsx";
import PaymentCheckoutPage from "./components/pages/PaymentCheckout/page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/trending",
        element: <TrendingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contactus",
        element: <ContactPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/account",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/products/:query",
        element: <FilterProductPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/:productName/:id",
        element: <ProductViewPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/checkout",
        element: <PaymentCheckoutPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
);
