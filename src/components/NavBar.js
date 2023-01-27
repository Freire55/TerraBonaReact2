import React from 'react'
import LogoImg from './LogoImg'
import './NavBar.css'

function NavBar() {
  return (
    <>
        <div className="nav-bar">
            <div className=" nav-bar">
                <div className="">
                    <LogoImg />
                </div>
                <div className="langs no-img">
                    <a className="lang" href="indexpt.html"> Português </a>
                    <a className="lang" href="indexpt.html"> English </a>
                    <a className="lang" href="indexpt.html"> Français </a>
                </div>
                <div className="sign-up no-img">
                    <button className="login box" id="show-login">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar