import React from "react"
import "../css/section.css"

function Section(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

export default Section
