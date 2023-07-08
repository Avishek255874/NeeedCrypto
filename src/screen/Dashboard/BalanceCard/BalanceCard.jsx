import React from "react";
import "./BalanceCard.css";
import HeadingCaption from "../../../components/HeadingCaption/HeadingCaption";
import IconImage from "../../../components/IconImage/IconImage";
import Button from "../../../components/Button/Button";

const BalanceCard = () => {
  return (
    <div className="card bg-dark p-3">
      <div className="row">
        <div className="col-6 ">
          <h6>Total Balance</h6>
          <br />
          <p className="fontStyle mb-2"> My balance</p>
          <p className="fs-5 mb-0"> $100085.854</p>
          <p className="fontStyle mb-0"> 190025.000 BTC</p>
        </div>
        <div className="col-3">
          <br />
          <br />
          <div className="d-flex  mb-2 align-items-center gap-3">
            <IconImage />
            <HeadingCaption
              heading="$1331.00"
              caption="Income"
              textColor="#999999"
            />
          </div>
          <Button title="Receive" TextColor="white" BgColor="#2c65f0" />
        </div>
        <div className="col-3">
          <br />
          <br />
          <div className="d-flex align-items-center gap-3 mb-2">
            <IconImage />
            <HeadingCaption
              heading="$234.00"
              caption="Expanse"
              textColor="#999999"
            />
          </div>
          <Button title="Send" TextColor="white" BgColor="#419dbb" />
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
