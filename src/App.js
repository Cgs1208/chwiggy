import "./App.css";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import Body from "./components/Body";
import Contact from "../src/pages/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Groceries list loading... Please wait</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
