import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import About from "../page/About/About";
import ViewDetails from "../page/ViewDetails/ViewDetails";
import SellWithRedfin from "../page/SellWithRedfin/SellWithRedfin";
import Update from "../page/Update/Update";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import PrivateRoute from "../page/PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:"/",
            loader: ()=> fetch('/info.json'),
            element:  <Home></Home>
  
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:"carts/:id",
          loader: ()=> fetch('/info.json'),
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> 
        },
        {
          path:'/privet',
          element: <SellWithRedfin></SellWithRedfin>
        },
        {
          path:'/update',
          element: <Update></Update>
        }
      ]
    },
  ]);

  export default router