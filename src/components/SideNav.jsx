import { Link as ScrollLink } from "react-scroll";
import { useScrollLinkContext } from "../ScrollContext";

export default function SideNav() {
  const { activeLink, setActive } = useScrollLinkContext();

  const handleSetActive = (link) => {
    setActive(link);
  };

  return (
    <div className="font-karla text-errie tracking-wider mt-16 hidden lg:block">
      <ul>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeLink === "about" && "active font-bold"
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
              activeLink === "experience" && "active font-bold"
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
              activeLink === "projects" && "active font-bold"
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
