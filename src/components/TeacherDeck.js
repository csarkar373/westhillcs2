import React from "react"
import "../css/CourseDeck.css"
import Card from "./Card.js"
import textbookIcon from "../logo/book1.png"
import csa from "../logo/bluejLogo.png"

import rajkumar from "../img/rajkumar.jpg"
import tennent from "../img/tennent.jpg"
import kolb from "../img/kolb.jpg"
import temelini from "../img/temelini.jpg"
import sarkar from "../img/sarkar3.jpg"
import kurtz from "../img/kurtz.jpg"

function TeacherDeck() {
  const tennentInfo = makeInfo(
    "Kris Tennent",
    "Ms.Tennent lives with her family in Darien, CT",
    "KTennent@StamfordCT.gov",
    "427: Classroom, 414: Computer Lab"
  )
  const kolbInfo = makeInfo(
    "Max Kolb",
    "Mr. Kolb joined Westhill in 2019. He lives in Norwalk, CT.",
    "MKolb@StamfordCT.gov",
    "421/414: Labs"
  )
  const rajkumarInfo = makeInfo(
    "Raj Kumar",
    "Dr. Raj Kumar is a veteran Physics and Robotics teacher at Westhill. He also runs the Robotics program at the school.",
    "RKumar@StamfordCT.gov",
    "112: Classroom"
  )
  const temeliniInfo = makeInfo(
    "Steve Temelini",
    "Mr. Temelini teaches courses on Information Technology, Economics, Entrepreneurship, and Consumer Math in the Business Department.",
    "STemelini@StamfordCT.gov",
    "104/221: Classrooms"
  )
  const sarkarInfo = makeInfo(
    "Chandan Sarkar",
    "Mr.Sarkar has been teaching computer science at Westhill since 2011. He lives in Stamford with his wife and his dog, Luna.",
    "CSarkar@StamfordCT.gov",
    "413: Classroom, 414/422: Computer Labs"
  )
  const kurtzInfo = makeInfo(
    "Karen Kurtz",
    "Ms. Kurtz is originally from West Virginia and taught for 5 years in her home town of Montcalm. She now lives in Stamford.",
    "KKurtz@StamfordCT.gov",
    "117: Classroom"
  )
  return (
    <div className="cards">
      <Card large pic={tennent} freeflow={tennentInfo} />
      <Card large pic={kolb} freeflow={kolbInfo} />
      <Card large pic={temelini} freeflow={temeliniInfo} />
      <Card large pic={rajkumar} freeflow={rajkumarInfo} />
      <Card large pic={kurtz} freeflow={kurtzInfo} />
      <Card large pic={sarkar} freeflow={sarkarInfo} />
    </div>
  )
}

function makeInfo(name, description, email, room) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Room:</b> {room}
      </p>
    </div>
  )
}
export default TeacherDeck
