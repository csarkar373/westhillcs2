import React from "react"
import "../css/courses.css"
import Card from "./Card.js"
import textbook from "../logo/book1.png"
import labbook from "../logo/book2.png"
import csa from "../logo/bluejLogo.png"
import csp from "../logo/ai-bee-logo.png"
import python from "../logo/pythonLogo.png"
import csab from "../logo/tree2.png"
import intro from "../logo/scratchLogo.png"
import cyber from "../logo/cyberLogo.png"
import robotics from "../logo/robotics4.png"
import game from "../logo/gameLogo.png"
import web from "../logo/web.png"
import awesome from "../logo/CSAwesomeLogoSmall.png"
import sun from "../logo/sun.png"

function Courses() {
  return (
    <div className="courses">
      <Card
        pic={csa}
        link="./Construction"
        title="AP CSA"
        textbook_link="./Construction"
        secondBook={[
          awesome,
          "https://runestone.academy/runestone/books/published/csawesome/index.html",
          "CSAwesome",
        ]}
        summer={[sun, "/Construction", "Summer Work"]}
      />
      <Card
        pic={csp}
        link="./Construction"
        title="AP CSP"
        textbook_link="https://course.mobilecsp.org/mobilecsp"
      />
      <Card
        pic={python}
        link="./Construction"
        title="Python A/B"
        textbook_link="https://academy.cs.cmu.edu/"
      />
      <Card
        pic={intro}
        link="./Construction"
        title="Intro CS"
        textbook_link="./Construction"
      />
      <Card
        pic={csab}
        link="./Construction"
        title="CS AB"
        textbook_link="./Construction"
        summer={[sun, "/Construction", "Summer Work"]}
      />
      <Card
        pic={cyber}
        link="./Construction"
        title="Cyber Security"
        textbook_link="./Construction"
      />
      <Card
        pic={web}
        link="./Construction"
        title="Web Design"
        textbook_link="./Construction"
      />
      <Card
        pic={game}
        link="./Construction"
        title="Game Design"
        textbook_link="./Construction"
      />
      <Card
        pic={robotics}
        link="./Construction"
        title="Robotics"
        textbook_link="./Construction"
      />
    </div>
  )
}
export default Courses
