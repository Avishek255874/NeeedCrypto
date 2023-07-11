import React from 'react';
import CardCoin from "../../../components/CardCoin/CardCoin";
import HeadingCaption from '../../../components/HeadingCaption/HeadingCaption';
import "./Watchlist.css";

const WatchList = ({ coin, }) => {
    return (
        <div className="ColorStyle p-3 card ">
            <h6 className=' text-light '>Watchlist</h6>
            <br />
            <div className='hstack watchlist gap-5 overflow-auto'>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray"  BitcoinName="Bitcoin" coinShortName="BTC"/>
                    <HeadingCaption
                        heading="$234.00"
                        caption="+25"
                        textColor="#21FF04"
                   
                    />
                </div>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" FontSize="12px" textColor="gray" BitcoinName="Ethereum" coinShortName="ETH" />
                    <HeadingCaption
                        heading="$20025521.00"
                        caption="-521"
                        textColor="#FF0000"
                  
                    />
                </div>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin= "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663" FontSize="12px" textColor="gray" BitcoinName="Tether" coinShortName="USDT"/>
                    <HeadingCaption
                        heading="$55555.00"
                        caption="+255.22"
                        textColor="#2FFF00"
                    />
                </div>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389" FontSize="12px" textColor="gray" BitcoinName="Binancecoin" coinShortName="BNB" />
                    <HeadingCaption
                        heading="$225154.00"
                        caption="-58.214"
                        textColor="#FF1515"
                    />
                </div>
                <div className="vstack gap-2 nowrap ">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731" FontSize="12px" textColor="gray" BitcoinName="Ripple" coinShortName="XPR"/>
                    <HeadingCaption
                        heading="$133004.00"
                        caption="+24862"
                        textColor="#22FF00"
                    />
                </div>
                <div className="vstack gap-2 nowrap ">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860" FontSize="12px" textColor="gray" BitcoinName="Cardano" coinShortName="ADA" />
                    <HeadingCaption
                        heading="$2845634.00"
                        caption="-125.63"
                        textColor="#FF0000"
                    />
                </div>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray" />
                    <HeadingCaption
                        heading="$234.00"
                        caption="Expanse"
                        textColor="#999999"
                    />
                </div>
                <div className="vstack gap-2 nowrap ">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray" />
                    <HeadingCaption
                        heading="$234.00"
                        caption="Expanse"
                        textColor="#999999"
                    />
                </div>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray" />
                    <HeadingCaption
                        heading="$234.00"
                        caption="Expanse"
                        textColor="#999999"
                    />
                </div>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray" />
                    <HeadingCaption
                        heading="$234.00"
                        caption="Expanse"
                        textColor="#999999"
                    />
                </div>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray" />
                    <HeadingCaption
                        heading="$234.00"
                        caption="Expanse"
                        textColor="#999999"
                    />
                </div>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray" />
                    <HeadingCaption
                        heading="$234.00"
                        caption="Expanse"
                        textColor="#999999"
                    />
                </div>
            </div>
        </div>
    )
}

export default WatchList