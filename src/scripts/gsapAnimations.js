import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initiateGsap() {
  gsap.registerPlugin(ScrollTrigger);

  /* GS_REVEAL CLASS ELEMENTS
  give slight motion entering and leaving
  ----------------------------------------- */
  // handle trigger
  const animateFrom = (elem, direction = 1) => {
    console.log('direction', direction);
    let x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    
    gsap.fromTo(elem, { x: x, y: y }, {
      duration: 1.25,
      x: 0,
      y: 0,
      ease: "expo",
      overwrite: "true"
    });
  };

  // set trigger
  gsap.utils.toArray(".gs_reveal").forEach((elem) => {
    
    ScrollTrigger.create({
      trigger: elem,
      markers: false,
      lazy: false,
      onEnter: () => animateFrom(elem),
      onEnterBack: () => animateFrom(elem, -1),
    });
  });

  /* MAIN NAV - TOGGLE ACTIVE CLASS
  ----------------------------------------- */
  const sections = gsap.utils.toArray(document.getElementsByTagName("section")).slice(1); // omit hero section
  const navLinks = gsap.utils.toArray(document.getElementById("main-nav-links").getElementsByClassName("nav-link"));

  // handle trigger
  const toggleActiveClass = (i) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
    if (i !== null) {
      navLinks[i].classList.add("active");
      navLinks[i].setAttribute("aria-current", "section");
    }
  }

  // set trigger
  sections.forEach((section, i) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        markers: false,
        start: "top +=15%",
        end: "bottom +=15%",
        onEnter: () => toggleActiveClass(i),
        onEnterBack: () => toggleActiveClass(i),
        onLeave: () => toggleActiveClass(null),
        onLeaveBack: () => toggleActiveClass(null),
      },
    });
  });

  // HERO - ANIMATION
  // animate hero images when entering and leaving hero section
  const heroTriggerConfig = {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    x: 0,
    y: 0,
    ease: "none",
    scrub: true,
  };

  gsap.to(".hero__truck", {
    scrollTrigger: heroTriggerConfig,
    rotation: -50,
  });

  gsap.to(".hero__sketch", {
    scrollTrigger: heroTriggerConfig,
    y: 200,
  });

  gsap.to(".hero__tree", {
    scrollTrigger: heroTriggerConfig,
    rotation: 50,
  });
}