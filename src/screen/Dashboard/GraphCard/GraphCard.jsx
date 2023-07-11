import React from 'react'
import HeadingCaption from "../../../components/HeadingCaption/HeadingCaption";
import CardCoin from "../../../components/CardCoin/CardCoin";
import imageGraph from "../../../assets/graph.png";

const GraphCard = () => {
    return (
        <div className="ColorStyle p-3 card ">
            <h6 className=' text-light '>Statistics</h6>
            <br />
            <div className='nowrap  d-flex justify-content-between'>
                <div className="vstack gap-2  nowrap">
                    <CardCoin coin="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" FontSize="12px" textColor="gray" BitcoinName="Bitcoin" coinShortName="" />
                    <HeadingCaption
                        heading="$234.00"
                        caption="+25"
                        textColor="#8D8D8D"
                    />
                </div>
                <div>
                    <HeadingCaption
                        caption="Currency"
                        heading="USD"
                        textColor="#8D8D8D"
                    />
                </div>
            </div>
            <img src={imageGraph} alt=""  height="300px"/>
        </div>
    )
}

export default GraphCard