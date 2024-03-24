import React from 'react'
import ReactDOM from 'react-dom/client'

import Error from './Components/Errore/Error.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Components/Mainlayout/Mainlayout.jsx';
import Home from './Components/Mainlayout/Home/Home.jsx';
import Appliedjo from './Components/Appliedjos/Appliedjo.jsx';
import Jobdet from './Components/JobDetails/Jobdet.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
      element: <Home></Home>
      
    },
    {
      path: "/applied",
    element: <Appliedjo></Appliedjo>
    
  },
  {
    path:'/job/:id',
    element:<Jobdet></Jobdet>,
    loader:() => fetch('../jobs.json')
  }
     
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
