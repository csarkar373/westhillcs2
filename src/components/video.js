import React, { Component } from "react"
import "../css/video.css"

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = { bigger: false }
    const { height, width } = { ...props }
    this.height = height ? height : 315
    this.width = width ? width : 560
    console.log("video height width", height, width)
  }

  biggerHandler = () => {
    this.setState(prevState => {
      console.log("bigger = ", !prevState.bigger)
      return { bigger: !prevState.bigger }
    })
  }

  render() {
    const bigger = this.state.bigger
    const height = bigger ? this.height * 2.5 : this.height
    const width = bigger ? this.width * 2.5 : this.width
    const classes = bigger
      ? "video_card iframe_bigger"
      : "video_card iframe_smaller"

    return (
      <div className={classes}>
        <iframe
          title="videoPlayer"
          width={width}
          height={height}
          src={"https://www.youtube.com/embed/" + this.props.src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <button className="video_button" onClick={this.biggerHandler}>
          {this.state.bigger ? "Smaller" : "Bigger"}
        </button>
        <h3 className="caption">{this.props.caption}</h3>
      </div>
    )
  }
}

export default Video
