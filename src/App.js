import "./App.css";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import Body from "./components/Body";
import Contact from "../src/pages/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
