import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./screen/Dashboard/Dashboard";
import SideBar from "./components/Sidebar/SideBar";


function App() {
  return (
    <div className="d-flex ">
      <SideBar />

      <Dashboard />
    </div>
  );
}

export default App;
