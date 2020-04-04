import React from 'react'
import "./DryButton.css"

 const DryButton = ({ text,onClick,className = "standard" }) => {
  return <div className={className}>{text}</div>
}
export default DryButton