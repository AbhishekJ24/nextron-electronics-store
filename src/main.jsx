import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./components/redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home/page.jsx";
import Footer from "./components/Footer.jsx";
import ProductsPage from "./components/pages/Products/page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <Navbar />
        <ProductsPage />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
        <App />
      </Provider>
    </React.StrictMode>
    ,
  </>
);
