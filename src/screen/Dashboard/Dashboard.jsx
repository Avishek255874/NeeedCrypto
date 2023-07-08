import React from "react";
import "./Dashboard.css";
import Button from "../../components/Button/Button";
import HeadingCaption from "../../components/HeadingCaption/HeadingCaption";
import SideBar from "../.././components/Sidebar/SideBar";
import Search from "../../components/SearchBar/Search";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import BalanceCard from "../Dashboard/BalanceCard/BalanceCard";
import WatchList from "../Dashboard/WatchList/WatchList"
const Dashboard = () => {
  return (
    <div className="m-3 w-100 row">
      <div className="col-md-8 ">
        <Search />
        <br />
        <BalanceCard />
        <br />
        <WatchList coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"/>
      </div>
      <div className="col-md-4">
        <ProfileImage />
      </div>

    </div>
  );
};

export default Dashboard;
