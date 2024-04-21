import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import "./index.css";
import { CountryContextProvider } from "./context/CountryData";
import CurrentWeather from "./pages/CurrentWeather";
import WeatherDetail from "./pages/WeatherDetail";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/", 
        element: <Home />,
        children:[]
      },
      {
        path: "/currentWeather", 
        element: <CurrentWeather />,
      },
      {
        path: "/currentWeather/:id", 
        element: <WeatherDetail/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountryContextProvider>
      <RouterProvider router={router} />
    </CountryContextProvider>
  </React.StrictMode>
);
