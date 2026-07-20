import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

function Router(){
    const router = createBrowserRouter([
  {
    path: "/",
    children: [
        { index:true, Component: Homepage },
        { path: "about", Component: AboutPage}
    ]
    
  },
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
}

export default Router