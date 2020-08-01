import React from "react"
import "../css/CourseDeck.css"
import Card from "./Card.js"
import textbookIcon from "../logo/book1.png"
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
    <div className="courses">
      <Card
        pic={csp}
        link="./Construction"
        title="AP CSP"
        textbook={[
          textbookIcon,
          "https://course.mobilecsp.org/mobilecsp",
          "Course Textbook",
        ]}
        secondBook={[ai, "http://ai2.appinventor.mit.edu/", "App Inventor"]}
      />
      <Card
        pic={python}
        link="./Construction"
        title="Python A/B"
        textbook={[
          textbookIcon,
          "https://academy.cs.cmu.edu/",
          "Course Textbook",
        ]}
      />
      <Card
        pic={intro}
        link="./Construction"
        title="Intro CS"
        textbook={[
          textbookIcon,
          "https://csab373.appspot.com/introCS/course",
          "Course Textbook",
        ]}
      />
      <Card
        pic={csa}
        link="./Construction"
        title="AP CSA"
        textbook={[textbookIcon, "./Construction", "Lab Textbook"]}
        secondBook={[
          awesome,
          "https://runestone.academy/runestone/books/published/csawesome/index.html",
          "CSAwesome",
        ]}
        summer={[sun, "/Construction", "Summer Work"]}
      />

      <Card
        pic={csab}
        link="./Construction"
        title="CS AB"
        textbook={[textbookIcon, "/Construction", "Course Textbook"]}
        summer={[sun, "/Construction", "Summer Work"]}
      />
      <Card
        pic={cyber}
        link="./Construction"
        title="Cyber Security"
        // textbook={[textbookIcon, "/Construction", "Course Textbook"]}
      />
      <Card
        pic={web}
        link="./Construction"
        title="Web Design"
        // textbook={[textbookIcon, "/Construction", "Course Textbook"]}
      />
      <Card
        pic={game}
        link="./Construction"
        title="Game Design"
        // textbook={[textbookIcon, "/Construction", "Course Textbook"]}
      />
      <Card
        pic={robotics}
        link="./Construction"
        title="Robotics"
        // textbook={[textbookIcon, "/Construction", "Course Textbook"]}
      />
    </div>
  )
}
export default CourseDeck
