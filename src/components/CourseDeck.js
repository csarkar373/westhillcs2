import React from "react"
import "../css/CourseDeck.css"
import Card from "./Card.js"
import tbIcon from "../logo/book1.png"
import csa from "../logo/bluejLogo.png"
import csp from "../logo/mobileCSPoriginal.png"
import ai from "../logo/ai-bee-logo.png"
import python from "../logo/pythonLogo.png"
import csab from "../logo/tree2.png"
import intro from "../logo/scratchLogo.png"
import cyber from "../logo/cyberLogo.png"
import robotics from "../logo/robotics4.png"
import game from "../logo/gameLogo.png"
import web from "../logo/web.png"
import awesome from "../logo/CSAwesomeLogoSmall.png"
import sun from "../logo/sun.png"

function CourseDeck() {
  return (
    <div className="cards">
      <Card
        pic={csp}
        link="./CSP"
        title="AP CSP"
        cardItem={[
          tbIcon,
          "https://course.mobilecsp.org/mobilecsp",
          "Course Textbook",
        ]}
        secondItem={[ai, "http://ai2.appinventor.mit.edu/", "App Inventor"]}
      />
      <Card
        pic={python}
        link="./Python"
        title="Python A/B"
        cardItem={[tbIcon, "https://academy.cs.cmu.edu/", "Course Textbook"]}
      />
      <Card
        pic={intro}
        link="./Intro"
        title="Intro CS"
        cardItem={[
          tbIcon,
          "https://csab373.appspot.com/introCS/course",
          "Course Textbook",
        ]}
      />
      <Card
        pic={csa}
        link="/CSA"
        title="AP CSA"
        cardItem={[tbIcon, "#", "Lab cardItem"]}
        secondItem={[
          awesome,
          "https://runestone.academy/runestone/books/published/csawesome/index.html",
          "CSAwesome",
        ]}
        summer={[sun, "/SummerAssignments", "Summer Work"]}
      />

      <Card
        pic={csab}
        link="./CSAB"
        title="CS AB"
        cardItem={[
          tbIcon,
          "https://csab373.appspot.com/first/course",
          "Course Textbook",
        ]}
        summer={[sun, "/SummerAssignments", "Summer Work"]}
      />
      <Card
        pic={cyber}
        link="/Cyber"
        title="Cyber Security"
        cardItem={[
          tbIcon,
          "https://csab373.appspot.com/cyber/course",
          "Course Textbook",
        ]}
      />
      <Card
        pic={web}
        link="./Web"
        title="Web Design"
        // cardItem={[tbIcon, "#", "Course Textbook"]}
      />
      <Card
        pic={game}
        link="./Game"
        title="Game Design"
        // cardItem={[tbIcon, "#", "Course Textbook"]}
      />
      <Card
        pic={robotics}
        link="./Robotics"
        title="Robotics"
        // cardItem={[tbIcon, "#", "Course Textbook"]}
      />
    </div>
  )
}
export default CourseDeck
