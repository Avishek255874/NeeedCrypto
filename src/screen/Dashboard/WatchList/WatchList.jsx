import React from 'react';
import CardCoin from "../../../components/CardCoin/CardCoin";
const WatchList = ({ coin, }) => {
    return (
        <div className="card bg-dark p-3 row">
            <h6 className=' text-light '>Watchlist</h6>

            <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" textColor="#999999" FontSize="12px" />
        </div>
    )
}

export default WatchList