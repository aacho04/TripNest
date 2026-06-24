import Layout from "./routes/layout/Layout.jsx";
import HomePage from "./routes/homepage/HomePage.jsx";
import SinglePage from "./routes/singlepage/SinglePage.jsx";
import Login from "./routes/login/Login.jsx";

import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

import ListPage from "./routes/listpage/ListPage.jsx";
import ProfilePage from "./routes/profilepage/ProfilePage.jsx";


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {index:true,
        element:<HomePage/>
      },{
        path:"list",
        element:<ListPage/>,
      },{
        path:"/:id",
        element:<SinglePage/>
      },{
        path:"login",
        element:<Login/>
      },{
        path:"/profile",
        element:<ProfilePage/>
      }
      ],
    },
  ]);
    return (

  <RouterProvider router={router} />


  )
}

export default App;
