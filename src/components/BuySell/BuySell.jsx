import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './BuySell.css'
import BuyfromCard from "../BuyfromCard/BuyfromCard"
import CoinOFFcanva from "../CoinOFFcanva/CoinOFFcanva"
import BuyInputCard from "../BuyInputCard/BuyInputCard";
import Button from "../Button/Button";


const BuySell = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='buySellTab'>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="border-0"
      >
        <Tab className='p-3' eventKey="home" title="  Buy">
          <BuyfromCard handleShow={handleShow} />
          <CoinOFFcanva show={show} handleClose={handleClose} />
          <BuyInputCard handleShow={handleShow} CoinShortname="USD" />
          <BuyInputCard handleShow={handleShow} CoinShortname="BTC" />
          <Button buttonSize="100px" title="Buy BTC" BgColor="#2c65f0" />


        </Tab>

        <Tab className='p-3' eventKey="profile" title="Sell">
          Tab content for Profile
        </Tab>
      </Tabs>

    </div>

  )
}

export default BuySell