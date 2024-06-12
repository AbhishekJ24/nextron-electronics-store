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
import AboutUsPage from "./components/pages/AboutUs/page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trending",
        element: <TrendingPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
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
