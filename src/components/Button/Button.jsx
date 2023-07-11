import React from 'react'
import "./Button.css"
 
const Button = ({title,TextColor,buttonSize,BgColor}) => {
  return (
   <button className='btn btn-primary w-100 border-0' style={{color:TextColor, width:buttonSize ,backgroundColor:BgColor ,}}>{title}</button>
  )
}

export default Button