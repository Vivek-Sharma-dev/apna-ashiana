import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Explore from "./pages/Explore.tsx";
import Host from "./pages/Host.tsx";
import Booking from "./pages/Booking.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Define child routes here if needed
      { index: true, element: <Home /> },
      { path: "/explore", element: <Explore /> },
      { path: "/host", element: <Host /> },
      { path: "/booking", element: <Booking /> },
      { path: "*", element: <h1>404 Not Found</h1> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
