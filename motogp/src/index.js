import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import RiderList from "./components/RiderList";
import AddCountry from "./components/AddCountry";
import DeleteCountry from "./components/DeleteCountry";
import AddRider from "./components/AddRider";

const router = createBrowserRouter([
  { path: "/", element: <LandingScreen /> },
  { path: "/riderList", element: <RiderList /> },
  { path: "/addcountry", element: <AddCountry /> },
  { path: "/deletecountry", element: <DeleteCountry /> },
  { path: "/addrider", element: <AddRider /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
