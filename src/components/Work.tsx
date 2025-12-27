import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
// Make sure to install react-icons: npm install react-icons
import { FiExternalLink } from "react-icons/fi"; 

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Prime Mentor",
    category: "Learning Management System",
    tools: "HTML, CSS, JavaScript, TailwindCSS",
    image: "/images/PrimeMentor.png",
    liveLink: "https://primementor.com.au/",
  },
  {
    title: "Pesofts",
    category: "Examination Platform",
    tools: "",
    image: "/images/Pesofts.png",
    liveLink: "https://pesofts-xi.vercel.app/",
  },
  {
    title: "iTask",
    category: "Task Management",
    tools: "HTMl, CSS, JavaScript, Vue.js, Node.js",
    image: "/images/Todo.png",
    liveLink: "https://itask-sigma.vercel.app/",
  },
  {
    title: "Audio Equalizer",
    category: "Music Equalizer",
    tools: "HTMl, CSS, JavaScript, Vue.js, Node.js",
    image: "/images/CircularEqualizer.png",
    liveLink: "https://audio-equalizer.vercel.app/",
  },
  {
    title: "Focus Flow",
    category: "Productivity App",
    tools: "HTMl, CSS, JavaScript, Vue.js, Node.js, MongoDB",
    image: "/images/FocusFlow.png",
    liveLink: "https://focusonflow.vercel.app/",
  },
  {
    title: "Blog Platform",
    category: "Content Management",
    tools: "Gatsby, Markdown, Netlify",
    image: "/images/blog-platform.webp",
    liveLink: "https://your-demo.com",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!box[0] || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
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
                
                <div className="work-details">
                  <h4>Tech Stack</h4>
                  <p>{project.tools}</p>
                </div>

                {/* New External Button */}
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="work-demo-btn"
                >
                  Live Demo <FiExternalLink />
                </a>
              </div>
              
              <div className="work-image">
                 <div className="work-image-in">
                    <WorkImage image={project.image} alt={project.title} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;