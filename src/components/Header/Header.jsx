import * as React from "react"
import "./Header.css"

export default function Header(props) {
  return (
    <header className="header">
      <h1 className={props.header.title}></h1>
      <h4 className={props.header.tagline}></h4>
      <p className={props.header.description}></p>
    </header>
  )
}

// export default Header(props)
