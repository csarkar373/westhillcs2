import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"
import add from "../util/add"

import game from "../logo/gameLogo.png"

function Game(props) {
  return (
    <div>
      <Layout>
        <h1>Course Description: Game Design</h1>
        <Section title="Game Design">
          <div className="image_box">
            <Card
              pic={game}
              link="#"
              title="Game Design"
              freeflow={add("-", "Game Maker")}
            />
          </div>
        </Section>

        <Section title="Course Description">
          <p>
            This half-year course introduces students to the history, structure,
            creation, and developmental strategy of game development. The
            history, player, and game elements will be examined, as well as the
            overall creation of the game from storytelling, characters, game
            play, levels, interface, and audio content based on the summer
            reading. The developmental strategy will focus on the roles and
            responsibilities, production and management, and marketing and
            maintenance of game development.
          </p>
        </Section>
        <Section title="GameMaker Overview">
          <Video src="WvRLAhsYKIE" />
        </Section>
      </Layout>
    </div>
  )
}

export default Game
