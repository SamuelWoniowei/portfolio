import { Link as ScrollLink } from "react-scroll";
import { useScrollLinkContext } from "../ScrollContext";
import { useEffect } from "react";

export default function SideNav() {
  const { activeLink, setActive } = useScrollLinkContext();

  const handleSetActive = (link) => {
    setActive(link);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = ["about", "experience", "projects"];
  
    const activeSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
      }
      return false;
    });
  
    setActive(activeSection || null);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  return (
    <div className="font-karla text-errie tracking-wider mt-16 hidden lg:block">
      <ul>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeLink === "about" && "active font-bold text-name"
            }`}
            onClick={() => handleSetActive("about")}
          >
            ABOUT
          </ScrollLink>
        </li>
        <li className="my-3">
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeLink === "experience" && "active font-bold text-name"
            }`}
            onClick={() => handleSetActive("experience")}
          >
            EXPERIENCE
          </ScrollLink>
        </li>
        <li className="my-3">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeLink === "projects" && "active font-bold text-name"
            }`}
            onClick={() => handleSetActive("projects")}
          >
            PROJECTS
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}
