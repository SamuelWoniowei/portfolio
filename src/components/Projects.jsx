import { useScrollLinkContext } from "../ScrollContext";
import LinkTo from "../assets/LinkTo";

export default function Projects() {
  const { activeLink } = useScrollLinkContext();
  const projects = [
    {
      name: "Countries",
      link: "https://seecountries.netlify.app",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704239663/Screenshot_2024-01-03_at_00.54.29.png",
      technology: ["React", "Netlify"],
      description:
        "The Countries App offers effortless exploration – seamlessly navigate, search, and filter countries. Dive into detailed pages, explore borders, showcasing my frontend development and user-friendly design skills for a seamless global adventure.",
    },
    {
      name: "Fancy TodoApp",
      link: "https://fancytodolist.netlify.app",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704239820/Screenshot_2024-01-03_at_00.57.50.png",
      technology: ["React", "Netlify"],
      description:
        "This app is designed for seamless task management with a sleek interface and a user-friendly design. Explore this project to see a demonstration of a functional Todo App with a cool dark mode option.",
    },
    {
      name: "Advise generator",
      link: "https://samuelwoniowei.github.io/advice-generator",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704270771/Screenshot_2024-01-03_at_09.33.51.png",
      technology: ["Javascript", "Github Pages"],
      description:
        "Advise generator is a single page responsive web app that displays random advise statements from an api. It was built using html, css and vanilla javascript with no frameworks.",
    },
    {
      name: "Tip calculator",
      link: "https://samuelwoniowei.github.io/tip-calculator",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704277526/Screenshot_2024-01-03_at_11.26.24.png",
      technology: ["Javascript", "Github Pages"],
      description:
        "A user-friendly solution for calculating tips during dining experiences. Built with HTML, CSS, and vanilla JavaScript, the app offers an intuitive interface, precise calculations, and bill-splitting functionality. Simplify tipping and enjoy a stress-free dining experience, whether alone or with friends.",
    },
  ];
  return (
    <div id="projects" className={` ${activeLink === "projects" && ""} pt-28`}>
      <h2 className="lg:hidden text-name font-bold mt-28 mb-8">PROJECTS</h2>
      {projects.map((project, idx) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 block hover:text-name"
          key={idx}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-14">
            <div className="md:w-1/5 order-2 md:order-1">
              <img
                className="h-50 w-1/2 md:h-30 md:w-28 "
                src={project.img}
                alt="Project Image"
              />
            </div>
            <div className="md:w-4/5 text-sm md:text-md order-1 md:order-2">
              <h3 className="order-1 md:order-2">
                {project.name} <LinkTo />
              </h3>
              {project.description}
              <div className="flex flex-wrap mt-3 text-xs gap-1">
                {project.technology.map((tech, idx) => (
                  <span
                    className=" bg-name text-white rounded-2xl p-2 px-3"
                    key={idx}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
