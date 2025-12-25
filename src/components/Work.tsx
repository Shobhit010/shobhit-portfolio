import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Netflix Clone",
    category: "Web Development",
    tools: "HTML, CSS, JavaScript, TailwindCSS",
    image: "/images/NetflixClone.png",
  },
  {
    title: "Spotify Clone",
    category: "Music Streaming",
    tools: "React, Redux, Firebase",
    image: "/images/spotify-clone.webp",
  },
  {
    title: "iTask",
    category: "Task Management",
    tools: "HTMl, CSS, JavaScript, Vue.js, Node.js",
    image: "/images/Todo.png",
  },
  {
    title: "Twitter Clone",
    category: "Social Media Website",
    tools: "HTMl, CSS, JavaScript, Vue.js, Node.js",
    image: "/images/TwitterClone.png",
  },
  {
    title: "Password Manager",
    category: "Presonal Password Manager",
    tools: "HTMl, CSS, JavaScript, Vue.js, Node.js, MongoDB",
    image: "/images/PassOP.png",
  },
  {
    title: "Blog Platform",
    category: "Content Management",
    tools: "Gatsby, Markdown, Netlify",
    image: "/images/blog-platform.webp",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document.querySelector(".work-container")!.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: ScrollTrigger.isTouch ? "fixed" : "transform",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });

    return () => {
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
