import React from 'react'
import CardCoin from "../../components/CardCoin/CardCoin";
import CoinOFFcanva from "../CoinOFFcanva/CoinOFFcanva";
import "./BuyInputCard.css"


const BuyInputCard = ({ handleShow,CoinShortname }) => {
    return (

        <div className="d-flex gap-2 offcanvasBorder nowrap p-3  mb-3 justify-content-between align-items-center w-100 rounded ">
            <div className='w-100'>
                <p className="fontStyle mb-2 nowrap text-truncate"> Amount ({CoinShortname})</p>
                <input type='text'  placeholder='$25215322' className='rounded p-1 border-0 InputBOX w-100'/>
            </div>
      
            <i className="fa-solid fa-chevron-down cursor-pointer" onClick={handleShow} />
            <div>
            </div>
        </div> 
    )
}

export default BuyInputCard