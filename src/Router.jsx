import App from "./App";
import Homepage from "./Homepage";
import ErrorPage from "./ErrorPage";
import CharactersPage from "./CharactersPage";
import AboutPage from "./AboutPage";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  children: [
      { index: true, element: <Homepage/> },
      { path: "about", element: <AboutPage/>},
      { path: "characters", element: <CharactersPage/>},
      { path: "/*", element: <ErrorPage/>}
    ]
  },
]);

export default router