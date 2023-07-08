import React from 'react'

const HeadingCaption = ({caption,heading,alignText,textColor,textHColor ,alignHText}) => {
  return (
    <div>
    <h6 className='m-0 ' style={{textAlign:alignHText, color:textHColor}}>{heading}</h6>
   <p  className='m-0 ' style={{textAlign:alignText, color:textColor}}>{caption}</p>
    </div>
    

  )
}

export default HeadingCaption