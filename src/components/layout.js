import React, { Component } from "react"
import "../css/layout.css"
import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { sidebarOpen: true }
  }

  handleHamburger = () => {
    console.log("clicked hamburger state=", this.state.sidebarOpen)
    this.setState(prevState => {
      return { sidebarOpen: !prevState.sidebarOpen }
    })
  }

  render() {
    const open = this.state.sidebarOpen
    return (
      <div className="container">
        <Header click={this.handleHamburger} />
        {open ? <SideBar click={this.handleHamburger} /> : ""}
        <main className={open ? "msb_open" : "msb_closed"}>
          {this.props.children}
        </main>
        <Footer open={open ? "sb_open" : "sb_closed"} />
      </div>
    )
  }
}

export default Layout
