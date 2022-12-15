import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/form',
      element: <Form />
    },
    {
      path: '/edit',
      element: <Form edit />
    }
  ])
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
