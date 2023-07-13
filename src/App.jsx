import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./screen/Dashboard/Dashboard";
import SideBar from "./components/Sidebar/SideBar";
import Cryptotable from "./screen/Cryptotable/Cryptotable";


function App() {
  return (
    <div className="d-flex  overflow-hidden w-100">
      <SideBar />
<Cryptotable/>

    </div>
  );
}


export default App;
