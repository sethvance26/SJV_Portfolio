import React from "react";
import Typed from "react-typed";
// import {Link} from "react-scroll";

const Header = () => {
    return (
      <>
      <header onload="document.getElementById(test).style.opacity='1'">
        <div id="home" className="header-wraper">
            <div className="main-info">
                {/* <h1 className="head-text">Seth Vance</h1>
                <h2 className="head-secondtext">Web Developer</h2> */}
                <div id="test" className="head-text">
                  <Typed 
                    className="typed-text" 
                    strings={["Seth Vance"]}
                    typeSpeed={90}
                  />
                </div>
                <h2 className="head-secondtext animate fadeIn">Web Developer</h2>
                {/* <Link smooth={true} to="contact" offset={-110} className="btn-main-offer">Contact Me</Link> */}
                {/* <Link className="btn-main-offer" to="contact" offset={-110} >Contact Me</Link> */}
            </div>
        </div>
      </header>
      </>
    )
}

export default Header
