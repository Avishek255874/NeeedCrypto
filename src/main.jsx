import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import transaction from "./screen/Transaction/transaction.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './screen/Dashboard/Dashboard.jsx';
import Cryptotable from './screen/Cryptotable/Cryptotable.jsx';
import SideBar from './components/Sidebar/SideBar.jsx';
import Transaction from "./screen/Transaction/transaction";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Exchange",
    element: <Cryptotable />,
  },
  {
    path: "/Transaction",
    element: <transaction/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="d-flex  overflow-hidden w-100">
    <SideBar />
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
