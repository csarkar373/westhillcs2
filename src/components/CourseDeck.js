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
        link="./CSP"
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
        link="./Python"
        title="Python A/B"
        textbook={[
          textbookIcon,
          "https://academy.cs.cmu.edu/",
          "Course Textbook",
        ]}
      />
      <Card
        pic={intro}
        link="./Intro"
        title="Intro CS"
        textbook={[
          textbookIcon,
          "https://csab373.appspot.com/introCS/course",
          "Course Textbook",
        ]}
      />
      <Card
        pic={csa}
        link="#"
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
        pic={csab}
        link="./CSAB"
        title="CS AB"
        textbook={[
          textbookIcon,
          "https://csab373.appspot.com/first/course",
          "Course Textbook",
        ]}
        summer={[sun, "#", "Summer Work"]}
      />
      <Card
        pic={cyber}
        link="/Cyber"
        title="Cyber Security"
        textbook={[
          textbookIcon,
          "https://csab373.appspot.com/cyber/course",
          "Course Textbook",
        ]}
      />
      <Card
        pic={web}
        link="./Web"
        title="Web Design"
        // textbook={[textbookIcon, "#", "Course Textbook"]}
      />
      <Card
        pic={game}
        link="./Game"
        title="Game Design"
        // textbook={[textbookIcon, "#", "Course Textbook"]}
      />
      <Card
        pic={robotics}
        link="./Robotics"
        title="Robotics"
        // textbook={[textbookIcon, "#", "Course Textbook"]}
      />
    </div>
  )
}
export default CourseDeck
