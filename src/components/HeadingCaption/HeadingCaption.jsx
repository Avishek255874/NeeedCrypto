import React from 'react'

const HeadingCaption = ({caption,heading,alignText,textColor,textHColor ,alignHText,fontHSize ,fontSize,captionClass,headerParentClass}) => {
  return (
    <div className={`${headerParentClass}`}>
    <h6 className={`${captionClass} m-0 text-truncate`}  style={{textAlign:alignHText, color:textHColor,  fontSize:fontHSize}}>{heading}</h6>
   <p  className={`${captionClass} m-0 text-truncate`} style={{textAlign:alignText, color:textColor, fontSize:fontSize}}>{caption}</p>
    </div>
    

  )
}

export default HeadingCaption