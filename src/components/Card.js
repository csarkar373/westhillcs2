import React, { Component } from "react"
import "../css/global.css"
import "../css/Card.css"

class Card extends Component {
  constructor(props) {
    super(props)
  }

  add(freeflow) {
    if (freeflow) {
      return <p className="card_freeflow">{freeflow}</p>
    }
  }

  addItems(item) {
    if (item) {
      const [icon, link, description] = [...item]
      return (
        <a className="card_item" href={link}>
          <div className="card_item_container">
            <img src={icon} height="25" width="25" alt="book2"></img>
            <p className="card_item_hover">{description}</p>
          </div>
        </a>
      )
    } else {
      return []
    }
  }
  render() {
    const { pic, link, title, large, variable } = { ...this.props }
    let cardClasses = large ? "card_container card_large" : "card_container"
    cardClasses = variable ? "card_container card_giant" : cardClasses

    let height = large ? "200" : "100"
    // height = giant ? "250" : height
    return (
      <div className={cardClasses}>
        <a href={link}>
          <img
            className="card_image"
            src={pic}
            height={height}
            alt="course"
          ></img>
        </a>
        <a href={link}>{title}</a>
        <div className="card_freeflow_container">
          {this.add(this.props.freeflow)}
        </div>
        <div className="card_item_box">
          {this.addItems(this.props.cardItem)}
          {this.addItems(this.props.secondItem)}
          {this.addItems(this.props.summer)}
        </div>
      </div>
    )
  }
}

export default Card
