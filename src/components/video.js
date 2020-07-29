import React from "react"
import "../css/video.css"

function Video(props) {
  //console.log("video title =", props)
  const height = props.height ? props.height : 315
  const width = props.width ? props.width : 560
  return (
    <div className="video">
      <iframe
        title="videoPlayer"
        width={width}
        height={height}
        src={"https://www.youtube.com/embed/" + props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
