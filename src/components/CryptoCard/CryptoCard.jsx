import React from 'react'
import HeadingCaption from '../HeadingCaption/HeadingCaption'
import "./CryptoCard.css"


const CryptoCard = () => {
  return (
    <div className='mb-4 CryptoCard'>
     <div className='d-flex align-items-center '>
    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="30px" className="me-3 " alt="coin"></img>
        <HeadingCaption
            heading="Bitcoin"
            caption="BTC"
            textColor="#999999"
            fontSize="10px"
            fontHSize="12px"
        />
    </div>
    
    
    
    
    <HeadingCaption
    headerParentClass="innerCard"
    heading="BTC 0.01284736"
    caption="$613.792"
    textColor="#999999"
    fontSize="10px"
    fontHSize="12px"

/>
   
  

  
</div>
  )
}

export default CryptoCard