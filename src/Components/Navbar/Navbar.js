import { NavLink } from "react-router-dom";
import * as logo from "../../img/climbing-svgrepo-com-revert.svg";
import * as profile from "../../img/profile-user-avatar-man-person-svgrepo-com.svg"
import * as hamburgerSvg from "../../img/hamburger-menu-mobile-svgrepo-com.svg"
import "../../Styles/App.css"
import { useState } from "react";

export const Navbar = () => {

  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <nav>
      {/* Mobile UI navbar */}
      <section className="px-36 py-6 pb-14 md:hidden bg-primary shadow-xl mx-auto justify-center [&>*]:text-white">
        {!showNavBar && <div className="absolute left-10">
          <a href="/" className="flex">
            <img className="h-8" src={logo.default} ></img>
            <h3 className="pl-2 text-3xl text-white font-logo
            ">Zendit</h3>
          </a>
        </div>}

        <div className="absolute right-10 flex">
          {!showNavBar && 
          <div onClick={() => setShowNavBar(true)}>
            <img className="h-8" src={hamburgerSvg.default} ></img>
          </div>}
          
        </div>
        <div className={showNavBar ? "showNavBar" : "hideMenuNav"}>
          <div 
              className="absolute top-0 right-0 px-8 py-6"
              onClick={() => setShowNavBar(false)}
            >
              <svg
                className="h-8 w-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            
            {/* 
              Ul showing in hamburger-navbar
              Wrap navbaritem in div to allow for setShowNavbar to work
            */}
            <ul className="flex py-12 flex-col items-center justify-between min-h-[250px]">
              <div onClick={() => setShowNavBar(false)}>
                <NavBarItem name="Climbs" link="/climbs"/>
              </div>
              <div onClick={() => setShowNavBar(false)}>
                <NavBarItem name="Stats" link="/stats" onClick={() => setShowNavBar(false)} />
              </div>
              <div onClick={() => setShowNavBar(false)}>
                <NavBarItem name="Grade-converter" link="/converter"/>
              </div>
              <div onClick={() => setShowNavBar(false)}>
                <NavBarItem name="Bibelen" link="/gear"/>
              </div>
            </ul>
        </div>
      </section>
      <section className="px-36 py-7 hidden md:flex bg-primary shadow-xl mx-auto justify-center [&>*]:text-white">
        <div className="absolute left-10">
          <a href="/" className="flex ">
            <img className="h-8" src={logo.default} ></img>
            <h3 className="pl-2 text-3xl text-white font-logo
            ">Zendit</h3>
          </a>
        </div>
        
        {/* Regular navbar */}
        <div className="flex [&>*]:px-8">
          <NavBarItem name="Climbs" link="/climbs" />
          <NavBarItem name="Stats" link="/stats"/>
          <NavBarItem name="Grade-converter" link="/converter"/>
          <NavBarItem name="Bibelen" link="/gear"/>
        </div>
        <div className="absolute right-10">
          <a href="" className="flex ">
            <img className="h-8" src={profile.default} ></img>
          </a>
        </div>
      </section>
    </nav>
  );
};

const NavBarItem = (props) => {
  return (
    <NavLink 
        exact
        to={props.link}
        className="hover:underline"
        activeClassName="underline"
        >
          {props.name}
    </NavLink>
  )
}

export default Navbar;
