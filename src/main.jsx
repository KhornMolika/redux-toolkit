import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import Product from "./pages/product/Product.jsx";
import Layout from "./components/layout/Layout.jsx";
import ContactUs from "./pages/about-us/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: (
              <Provider store={store}>
                <App />
              </Provider>
            ),
          },
          {
            path: "/about-us",
            element: <AboutUs/>
          },
          {
            path: "/product",
            element: <Product/>
          },
          {
            path: "/contact-us",
            element: <ContactUs/>
          },
    ],
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
