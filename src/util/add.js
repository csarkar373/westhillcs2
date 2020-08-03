import React from "react"
function add(prereqs, languages) {
  return (
    <div>
      <div>
        <b>Prerequisites: </b>
        {prereqs}
      </div>
      <div>
        <b>Languages: </b>
        {languages}
      </div>
    </div>
  )
}
export default add
