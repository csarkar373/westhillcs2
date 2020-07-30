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

  makeSidebar() {
    console.log("make sidebar =", this.state.sidebarOpen)
    let sb = []
    if (this.state.sidebarOpen) {
      sb = <SideBar />
    }
    return sb
  }

  makeMain() {
    let cn = "closed"
    if (this.state.sidebarOpen) {
      cn = "open"
    }
    console.log("make main =", cn)
    return <main className={cn}>{this.props.children}</main>
  }
  render() {
    return (
      <div className="container">
        <Header click={this.handleHamburger} />
        {this.makeSidebar()}
        {this.makeMain()}
        <Footer />
      </div>
    )
  }
}

export default Layout
