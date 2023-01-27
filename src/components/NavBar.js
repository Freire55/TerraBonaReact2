import React from 'react'
import LogoImg from './LogoImg'
import './NavBar.css'
import {Link} from 'react-router-dom'

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
                    <Link to="/login">
                    <button className="login box" id="show-login">
                        Login
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar