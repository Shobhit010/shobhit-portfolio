import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import Lenis from 'lenis';
import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother"; // Removed
import "./styles/Navbar.css";
import 'lenis/dist/lenis.css';

// gsap.registerPlugin(ScrollSmoother, ScrollTrigger); // ScrollSmoother removed
gsap.registerPlugin(ScrollTrigger);

export let lenisRef: Lenis;

const Navbar = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoResize: true,
      // wrapper and content are generally not needed for Lenis on body, 
      // but if the layout depends on the wrapper divs, we can leave them be or target them.
      // Let's stick to window scroll for best Lenis performance unless wrapper is scrolling.
      // Given ScrollSmoother usage, it likely had a fixed wrapper. 
      // Lenis usually prefers: html { height: auto }
    });

    // Make lenis available globally or via export for initialFX
    // We can assign it to the exported variable, but we need to change the type.
    // For now, let's just assign it to a global or managed variable.
    lenisRef = lenis;

    // Sync with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initial state
    lenis.scrollTo(0, { immediate: true });
    lenis.stop(); // Mimic paused(true) from original code

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            lenis.scrollTo(section, { offset: 0, duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
          }
        }
      });
    });

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          shobhit.dev
        </a>
        <a
          href="mailto:shobhit2004poddar@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          shobhit2004poddar@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
