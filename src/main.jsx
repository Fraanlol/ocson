import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Cursos from "./routes/Cursos";
import Contact from "./routes/contact";
import {action as cargarForm} from "./components/sheet"
import Tienda from "./routes/tienda";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },{
    path: "/cursos",
    element: <Cursos />,
  },{
    path: "/contact",
    element: <Contact />,
    action: cargarForm,
  },{
    path: "/tienda",
    element: <Tienda />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);