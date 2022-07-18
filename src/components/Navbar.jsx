import React, { Component } from 'react'
import science from "./science.png"
import business from "./business.png"
import tv from "./tv.png"
import general from "./general_options.png"
import health from "./plus.png"
import sports from "./sports.png"
import technology from "./technology.png"
import home from "./home.png"
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">MyNews</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"><img src={home} height="25px" width="25px" className="mx-1" alt="Home"/>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science"><img src={science} height="25px" width="25px" className="mx-1" alt="Science"/>Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business"><img src={business} height="25px" width="25px" className="mx-1" alt="Business"/>Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment"><img src={tv} height="25px" width="25px" className="mx-1" alt="Entertainment"/>Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><img src={general} height="25px" width="25px" className="mx-1" alt="General"/>General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health"><img src={health} height="25px" width="25px" className="mx-1" alt="Health"/>Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports"><img src={sports} height="25px" width="25px" className="mx-1" alt="Sports"/>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology"><img src={technology} height="25px" width="25px" className="mx-1" alt="Technology"/>Technology</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
