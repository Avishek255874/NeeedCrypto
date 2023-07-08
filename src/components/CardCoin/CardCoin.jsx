import React from 'react'

const CardCoin = ({ coin ,textColor ,FontSize}) => {
    return (
        <div>
            <div className='pt-3  '>
                <img src={coin} width="20px" className="me-3 " alt='' />
                <span className='pe-2 ' >
                    Bitcoin
                </span>
                <span style={{fontSize:FontSize,color:textColor ,}}>
                    BTC
                </span>
            </div></div>
    )
}

export default CardCoin