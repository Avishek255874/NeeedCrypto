import React from 'react'

const CardCoin = ({ coin, textColor, FontSize ,coinShortName,BitcoinName}) => {
    return (
        
            <div >
                <img src={coin} width="20px" className="me-3 " alt='' />
                <span className='pe-2 ' >
                   {BitcoinName}
                </span>
                <span style={{ fontSize: FontSize, color: textColor, }}>
                   {coinShortName}
                </span>
            </div>
       
 
        
    )
}

export default CardCoin