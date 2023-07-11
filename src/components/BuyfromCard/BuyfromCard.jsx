import React from 'react'
import CardCoin from "../../components/CardCoin/CardCoin";
import CoinOFFcanva from "../CoinOFFcanva/CoinOFFcanva";
import "./BuyfromCard.css"

const BuyfromCard = ({ handleShow }) => {
    return (

        <div className="d-flex gap-2 offcanvasBorder nowrap p-3  mb-3 justify-content-between align-items-center w-100 rounded ">
            <div className='w-100'>
                <p className="fontStyle mb-2 nowrap text-truncate"> Bitcoin Price</p>
                <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray" BitcoinName="Bitcoin" coinShortName="BTC" />
            </div>
            
            <i className="fa-solid fa-chevron-down cursor-pointer" onClick={handleShow} />
            <div>
            </div>
        </div>
    )
}

export default BuyfromCard