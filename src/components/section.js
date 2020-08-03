import React from "react"
import "../css/section.css"

function Section(props) {
  return (
    <div className="section">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}

export default Section
