import React from "react"
import "../css/CourseDeck.css"
import Card from "./Card.js"
import textbookIcon from "../logo/book1.png"
import csa from "../logo/bluejLogo.png"

import mobileCSP from "../logo/mobileCSPlarge.png"
import scholastica from "../logo/csed.png"
import CSAwesome from "../logo/CSAwesomeLogoSmall.png"
import CMU from "../logo/CMUlogo.png"
import beyondLimits from "../logo/beyondlimits.jpg"
import girlsWhoCode from "../logo/girlswhocode.png"

function PartnerDeck() {
  const mobileCSPinfo = makeInfo(
    "Mobile CSP",
    "Mobile CSP is a College Board-endorsed provider for the AP CSP course. Curriculum and professional development are based on the theme of mobile computing. They CSAW with most of our materials for AP CSP and AP CSA.",
    "info@mobile-csp.org",
    "https://mobile-csp.org/"
  )
  const CSAwesomeInfo = makeInfo(
    "CSAwesome",
    "CSAwesome provides us with our on-line, interactive textbook for AP CSA. This textbook allows students to write and execute Java code in-line. CSAwesome is part of the National Center for Computer Science Education.",
    "info@csawesome.org",
    "https://www.csawesome.org/curriculum/"
  )
  const scholasticaInfo = makeInfo(
    "National Center for Computer Science Education",
    "CSAwesome provides us with our on-line, interactive textbook for AP CSA. This textbook allows students to write and execute Java code in-line. CSAwesome is part of the National Center for Computer Science Education.",
    "csed@css.edu",
    "http://www.css.edu/academics/centers-and-institutes/national-center-for-computer-science-education.html"
  )
  const beyondLimitsInfo = makeInfo(
    "Beyond Limits",
    "Launched in 2013 as a program of the Stamford Peace Youth Foundation, Inc., the Beyond Limits Academic Program provides highly subsidized one-on-one tutoring and informal mentoring to Stamford Peace’s student-athletes and students attending our local public schools. Tutoring is typically conducted by Stamford Public School’s upperclassmen, including members of the National Honor Society, many of whom are referred by teachers, administrators, and other tutors. We also have a growing number of college students tutoring for us.",
    "info@beyondlimitsacademics.org",
    "https://beyondlimitsacademics.org/"
  )
  const CMUinfo = makeInfo(
    "Carnegie Mellon CS Academy",
    "Carnegie Mellon's CS Academy provide free, online, interactive computer science curriculum for high schools that is engaging, creative, rigorous and fun. CS Academy also includes teacher training, an online interactive textbook, and online technical support. Carnegie Mellon supplies CSAW with its on-line, interactive, introductory Python courses (Python A/B).",
    "ecawley@andrew.cmu.edu",
    "https://girlswhocode.com/"
  )
  const girlsWhoCodeInfo = makeInfo(
    "Girls Who Code",
    "Girls Who Code works to educate, inspire, and equip young women with the skills and resources to pursue academic and career opportunities in computing fields. Westhill runs a chapter of Girls Who Code.It meets in 414 on Monday afternoons, after school.Please contact Ms.Tennent for more information.",
    "KTennent@StamfordCT.gov",
    "https://academy.cs.cmu.edu/splash"
  )

  return (
    <div className="cards">
      <Card variable pic={mobileCSP} freeflow={mobileCSPinfo} />
      <Card variable pic={CSAwesome} freeflow={CSAwesomeInfo} />
      <Card variable pic={scholastica} freeflow={scholasticaInfo} />
      <Card variable pic={CMU} freeflow={CMUinfo} />
      <Card variable pic={girlsWhoCode} freeflow={girlsWhoCodeInfo} />
      <Card variable pic={beyondLimits} freeflow={beyondLimitsInfo} />
    </div>
  )
}

function makeInfo(name, description, email, website) {
  return (
    <div>
      <p>
        <h4>
          <a href={website}>{name}</a>
        </h4>
      </p>
      <p>{description}</p>
      <p>
        <b>Email:</b> {email}
      </p>
    </div>
  )
}
export default PartnerDeck
