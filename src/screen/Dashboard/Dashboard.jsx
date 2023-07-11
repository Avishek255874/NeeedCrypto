import { useState } from 'react';
import "./Dashboard.css";
import Button from "../../components/Button/Button";
import HeadingCaption from "../../components/HeadingCaption/HeadingCaption";
import SideBar from "../.././components/Sidebar/SideBar";
import Search from "../../components/SearchBar/Search";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import BalanceCard from "../Dashboard/BalanceCard/BalanceCard";
import WatchList from "../Dashboard/WatchList/WatchList";
import CardCoin from "../../components/CardCoin/CardCoin";
import GraphCard from "../../screen/Dashboard/GraphCard/GraphCard";
import BuySell from "../../components/BuySell/BuySell"
import BuyInputCard from "../../components/BuyInputCard/BuyInputCard";
import Portfolio from "../../components/Portfolio/Portfolio";
import SideBarOffcanvas from '../../components/SideBarOffcanvas/SideBarOffcanvas';


const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="p-3 w-100 row m-0 overflow-auto dashboardStyle">
      <div className="row ">
        <div className="col-md-8">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <Search />
            <i className="fa-solid fa-bars MenuBar  " onClick={handleShow}  />
<SideBarOffcanvas show={show} handleClose={handleClose} />
          </div>
        </div>
        <div className="col-md-4">
          <ProfileImage />
        </div>

      </div>

      <div className="col-md-8 ">

        <br />
        <BalanceCard />
        <br />
        <WatchList />
        <br />
        <GraphCard />


      </div>
      <div className="col-md-4">

        <br />
        <BuySell />
        <br />
        <Portfolio />

      </div>

    </div>
  );
};

export default Dashboard;
