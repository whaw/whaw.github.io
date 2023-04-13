import React, { useEffect } from "react"
import Helmet from "react-helmet"
import $ from "jquery"

import { initiateGsap } from "./gsapAnimations"
import { cssAnimations } from "./cssAnimations"
import { siteJsUtils } from "./siteJsUtils"

import MainNav from "../MainNav/MainNav"
import Hero from "../Hero/Hero"
import Introductions from "../Introductions"
import AboutSite from "../AboutSite"
import Experience from "../Experience/Experience"
import Contact from "../Contact"
import TopButton from "../TopButton"
import Button from "../Button"

const Layout = () => {

  useEffect(() => {
    if (typeof window !== `undefined`) {
      initiateGsap()
    }
  }, [])

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>A Working Copy – a portfolio site and sandbox for experimentation and discovery</title>
        <meta name="googlebot" content="noindex" />
        {/* Structured Data is omitted for SEO, given the temporary nature of the site */}
        <body id="home" className="px-md-3" />
      </Helmet>
      <header className="header">
        <MainNav />
        <Hero inView={siteJsUtils.inView} cssAnimations={cssAnimations} />
      </header>
      <main>
        <Introductions />
        <AboutSite />
        <Experience />
        <Contact />
        <TopButton>
          <Button label="Top" classes="btn-secondary" method={siteJsUtils.scrollHome} />
        </TopButton>
      </main>
      <footer className="border-top pt-2 pb-5 mb-5 pl-3 text-secondary small">
        <div className="container">
          <div className="row">
            <div className="col-12">
              &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout

