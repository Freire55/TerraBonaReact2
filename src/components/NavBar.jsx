import React, { Component } from 'react'
import LogoImg from './LogoImg';

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="nav-bar container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <LogoImg />
                </div>
                <div className="langs col-sm-4 no-img">
                    <a className="lang" href="indexpt.html"> Português </a>
                    <a className="lang" href="indexpt.html"> English </a>
                    <a className="lang" href="indexpt.html"> Français </a>
                </div>
                <div className="sign-up col-sm-3 no-img">
                    <button className="login box" id="show-login">
                        Login
                    </button>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default NavBar