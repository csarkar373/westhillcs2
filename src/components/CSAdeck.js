import React from "react"
import "../css/CourseDeck.css"
import Card from "./Card.js"
import textbookIcon from "../logo/book1.png"
import csa from "../logo/bluejLogo.png"

import greenfoot from "../logo/greenfootLogo.jpg"
import notebook from "../logo/googlesites.png"
import practiceit from "../logo/practiceit.png"
import classroom from "../logo/googleclassroom.png"
import codingbat from "../logo/CodingBatLogo.jpg"
import googleDrive from "../logo/googledrive.png"
import csagames from "../logo/csagames.png"
import awesome from "../logo/CSAwesomeLogoSmall.png"
import sun from "../logo/sun.png"

function CSAdeck() {
  return (
    <div className="courses">
      <Card
        pic={csa}
        link="/CSA"
        title="AP CSA"
        textbook={[textbookIcon, "#", "Lab Textbook"]}
        secondBook={[
          awesome,
          "https://runestone.academy/runestone/books/published/csawesome/index.html",
          "CSAwesome",
        ]}
        summer={[sun, "#", "Summer Work"]}
      />

      <Card
        pic={codingbat}
        link="https://codingbat.com/java"
        title="Coding Bat"
      />
      <Card
        pic={greenfoot}
        link="https://www.greenfoot.org/door"
        title="Greenfoot"
      />
      <Card
        pic={practiceit}
        link="https://practiceit.cs.washington.edu/"
        title="Practice It"
      />
      <Card
        pic={awesome}
        link="https://runestone.academy/runestone/books/published/csawesome/index.html"
        title="CSAwesome Textbook"
      />

      <Card
        pic={textbookIcon}
        link="https://csab373.appspot.com/apcsa/course"
        title="Laboratory Textbook"
      />
      <Card
        pic={googleDrive}
        link="https://drive.google.com/drive/folders/0B5rct-XawetHSldiRVE5Y3ZZc1k?usp=sharing"
        title="Labs in Google Drive"
      />
      <Card
        pic={csagames}
        link="https://csa-games.netlify.app/"
        title="CSA Games"
      />
      <Card
        pic={classroom}
        link="https://classroom.google.com/u/1/h"
        title="Google Classroom"
      />
      <Card
        pic={notebook}
        link="https://sites.google.com/site/apcsatemplate2017/"
        title="Notebook Template"
      />
    </div>
  )
}
export default CSAdeck
