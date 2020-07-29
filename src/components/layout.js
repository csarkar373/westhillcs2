import React from "react"
import "../css/layout.css"
import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar"

function Layout(props) {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
