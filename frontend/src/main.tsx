import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Explore from "./pages/Explore.tsx";
import Host from "./pages/Host.tsx";
import Booking from "./pages/Booking.tsx";
import ViewProduct from "./pages/ViewProduct.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      { path: "/product-Details/:id", element: <ViewProduct /> },
      { path: "*", element: <h1>404 Not Found</h1> },
    ],
  },
]);

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>x
    <RouterProvider router={router} />,
  </QueryClientProvider>,
);
