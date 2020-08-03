import React, { Component } from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../css/ClassPhotos.css"
import { Carousel } from "react-responsive-carousel"

import p1 from "../photos/cyber.jpg"
import p2 from "../photos/Berkley.jpg"
import p3 from "../img/crevecoeur.jpg"
import p4 from "../photos/expo16.jpg"
import p5 from "../photos/robo1.jpeg"
import p6 from "../photos/sarkarsuper.jpg"
import p7 from "../photos/sithLord.png"
import p8 from "../photos/GE12.jpg"
import p9 from "../photos/NCWIT.jpg"
import p10 from "../photos/Quinn16.jpg"

function ClassPhotos(props) {
  return (
    <div>
      <Layout>
        <Section title="Class Photos">
          <div className="carousel_container">
            <div className="photo_carousel">
              <Carousel infiniteLoop autoPlay showThumbs={false}>
                <div>
                  <img src={p1} />
                  <p className="legend">
                    Girls Cyber Team Secures State Bronze Medal
                  </p>
                </div>
                <div>
                  <img src={p2} />
                  <p className="legend">Ms. Berkley Promotes AP CSP</p>
                </div>
                <div>
                  <img src={p3} />
                  <p className="legend">
                    Danielle Crevecoeur NCWIT Award Winner
                  </p>
                </div>
                <div>
                  <img src={p4} />
                  <p className="legend">
                    Students Attend App Inventor Expo at Trinity College
                  </p>
                </div>
                <div>
                  <img src={p5} />
                  <p className="legend">Westhill Robotics Team at Qualifiers</p>
                </div>
                <div>
                  <img src={p6} />
                  <p className="legend">Hardest Grader Superlative</p>
                </div>
                <div>
                  <img src={p7} />
                  <p className="legend">2016 Halloween</p>
                </div>
                <div>
                  <img src={p8} />
                  <p className="legend">GE Competition State Champs 2012</p>
                </div>
                <div>
                  <img src={p9} />
                  <p className="legend">
                    Reshmi Ranjith and Rachel Lese NCWIT Award Winners
                  </p>
                </div>
                <div>
                  <img src={p10} />
                  <p className="legend">Quinnipeac Bronze Medal 2016</p>
                </div>
              </Carousel>
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default ClassPhotos
