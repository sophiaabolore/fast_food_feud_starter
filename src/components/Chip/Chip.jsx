import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick }) {

  const buttonClassName = isActive ? "chip active" : "chip"
  
  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label" >{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
