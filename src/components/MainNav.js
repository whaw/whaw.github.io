import React from "react"
import $ from "jquery"

const MainNav = () => {
  const navLinks = [
    { label: "Introductions", to: "#introductions" },
    { label: "About this site", to: "#about-this-site" },
    { label: "Experience", to: "#experience" },
    { label: "Contact", to: "#contact" }
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg container navbar__container navbar-light bg-white justify-content-between fixed-top pt-lg-3">
        <button className="navbar-brand js_logo pb-2 border-0 bg-white text-left p-0" onClick={() => $(window).scrollTop(0)}>
          <span className="logo mb-2 d-block">A Working Copy</span>
          William Haw &mdash; Front-End Developer
          <span className="d-none d-md-inline-block">
            , Outdoor Enthusiast
          </span>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-grow-0 pb-4 pb-sm-2"
          id="navbarSupportedContent"
        >
          <ul id="main-nav" className="nav navbar-nav mr-auto">
            {navLinks.map((link, i) => (
              <li key={link.to} className="nav-item">
                <a className="nav-link" href={link.to}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MainNav
