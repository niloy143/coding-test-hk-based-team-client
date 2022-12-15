import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Form from "./components/Form";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: sessionStorage.getItem('userId') ? <div> this is home </div> : <Navigate to="/form" />
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
