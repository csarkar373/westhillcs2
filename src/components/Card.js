import React, { Component } from "react"
import { Link } from "gatsby"
import "../css/Card.css"
import book from "../logo/book1.png"

class Card extends Component {
  constructor(props) {
    super(props)
  }

  makeCard() {
    const data = []
    const cardStuff = []
    for (let i = 0; i < data.length; ++i) {
      cardStuff.push(
        <img src={data[i].icon} alt="icon">
          <Link to={data[i].link} />
        </img>
      )
    }
    return cardStuff
  }
  render() {
    const { pic, link, title, textbook_link } = { ...this.props }
    return (
      <div className="card_container">
        <a href={link}>
          <img src={pic} height="100" width="100" alt="course"></img>
        </a>
        <a href={link}>{title}</a>

        <a className="textbook" href={textbook_link}>
          <div className="textbook_container">
            <img src={book} height="25" width="25" alt="book"></img>
            <p className="textbook_hover">textbook</p>
          </div>
        </a>
      </div>
    )
  }
}

export default Card
