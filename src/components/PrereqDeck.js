import React from "react"
import "../css/CourseDeck.css"
import add from "../util/add"
import Card from "./Card"
import tbIcon from "../logo/book1.png"
import csa from "../logo/bluejLogo.png"
import csp from "../logo/mobileCSPoriginal.png"
import python from "../logo/pythonLogo.png"
import csab from "../logo/tree2.png"
import intro from "../logo/scratchLogo.png"
import cyber from "../logo/cyberLogo.png"
import robotics from "../logo/robotics4.png"
import game from "../logo/gameLogo.png"
import web from "../logo/web.png"

function PrereqDeck() {
  return (
    <div className="cards">
      <Card
        pic={csp}
        link="./CSP"
        title="AP CSP"
        freeflow={add("Algebra 1", "App Inventor")}
      />
      <Card
        pic={python}
        link="./Python"
        title="Python A/B"
        freeflow={add("-", "Python")}
      />
      <Card
        pic={intro}
        link="./Intro"
        title="Intro CS"
        freeflow={add("-", "scratch, jeroo, code.org, lightbot, java")}
      />
      <Card
        pic={csa}
        link="/CSA"
        title="AP CSA"
        freeflow={add("See Note 1", "Java")}
      />

      <Card
        pic={csab}
        link="./CSAB"
        title="CS AB"
        freeflow={add("AP CSA", "Java")}
      />
      <Card
        pic={cyber}
        link="/Cyber"
        title="Cyber Security"
        freeflow={add("See Note 2", "Python")}
      />
      <Card
        pic={web}
        link="./Web"
        title="Web Design"
        freeflow={add("-", "Javascript")}
      />
      <Card
        pic={game}
        link="./Game"
        title="Game Design"
        freeflow={add("-", "Game Maker")}
      />
      <Card
        pic={robotics}
        link="./Robotics"
        title="Robotics"
        freeflow={add("-", "Java")}
      />
    </div>
  )
}
export default PrereqDeck
