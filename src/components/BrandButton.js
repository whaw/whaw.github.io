import React from 'react'
import { jsSiteUtils } from "../assets/js/jsSiteUtils"

const BrandButton = () => {
  return (
    <button className="navbar-brand js_logo pb-2 border-0 bg-white text-left p-0" onClick={() => jsSiteUtils.scrollHome()}>
      <span className="logo mb-2 d-block">William Haw</span>
      <span>Front-End Developer
        <span className="d-none d-xl-inline-block">, Outdoor Enthusiast</span>
      </span>
    </button>
  )
}

export default BrandButton