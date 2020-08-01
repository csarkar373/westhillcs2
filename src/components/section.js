import React from "react"
import "../css/section.css"

function Section(props) {
  return (
    <div className="section">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

export default Section
