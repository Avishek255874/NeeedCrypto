import React from 'react'
import HeadingCaption from '../HeadingCaption/HeadingCaption'
import CryptoCard from '../CryptoCard/CryptoCard'



const Portfolio = () => {
    return (
        <div className="card ColorStyle  p-3 text-light mb=3">
            <h6 >Total Balance</h6>
            <br/>
           <CryptoCard/>
           <CryptoCard/>
           <CryptoCard/>
           <CryptoCard/>
           <CryptoCard/>
  </div>
    )
}

export default Portfolio