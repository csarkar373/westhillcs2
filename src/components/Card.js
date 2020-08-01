import React, { Component } from "react"
import { Link } from "gatsby"
import "../css/Card.css"
import book from "../logo/book1.png"

class Card extends Component {
  constructor(props) {
    super(props)
  }

  addItems(item) {
    if (item) {
      const [icon, link, description] = [...item]
      return (
        <a className="textbook" href={link}>
          <div className="textbook_container">
            <img src={icon} height="25" width="25" alt="book2"></img>
            <p className="textbook_hover">{description}</p>
          </div>
        </a>
      )
    } else {
      return []
    }
  }
  render() {
    const { pic, link, title, textbook_link } = { ...this.props }
    return (
      <div className="card_container">
        <a href={link}>
          <img src={pic} height="100" width="100" alt="course"></img>
        </a>
        <a href={link}>{title}</a>

        <div className="textbook_box">
          {this.addItems(this.props.textbook)}
          {this.addItems(this.props.secondBook)}
          {this.addItems(this.props.summer)}
        </div>
      </div>
    )
  }
}

export default Card
