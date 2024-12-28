"use client";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import LinkTo from "../assets/LinkTo";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Projects() {
  const activeLink = useSelector((state) => state.scrollLink.activeLink);
  const projects = [
    {
      name: "Akaani Web app",
      link: "http://useakaani.com",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704310200/Screenshot_2024-01-03_at_20.30.47.png",
      technology: ["React"],
      description:
        "Web app for Akaani, a supply-chain startup that combines an AI-powered marketplace and recipe platform to create a one-of-a-kind commerce experience for African grocery customers and sellers.",
    },
    {
      name: "Akaani Mobile App",
      link: "https://apps.apple.com/us/app/akaani/id6714456885",
      img: "https://res.cloudinary.com/shmulky/image/upload/t_square/v1704310985/IMG_2DC874DA1DB7-1.jpg",
      technology: ["React Native"],
      description:
        "Developed and styled pages on the Akaani user and Sella Apps",
    },
    {
      name: "Countries",
      link: "https://seecountries.netlify.app",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704239663/Screenshot_2024-01-03_at_00.54.29.png",
      github: "https://github.com/SamuelWoniowei/seecountries.git",
      technology: ["React", "Netlify"],
      description:
        "The Countries App offers effortless exploration – seamlessly navigate, search, and filter countries. Dive into detailed pages, explore borders, showcasing my frontend development and user-friendly design skills for a seamless global adventure.",
    },
    {
      name: "Feed Someone",
      link: "https://feed-someone.vercel.app",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1735349514/Screenshot_2024-12-28_at_02.31.01.png",
      github: "https://github.com/SamuelWoniowei/feed-someone.git",
      technology: ["Reactjs", "Vercel"],
      description:
        "Feed someone is a platform that connects people who need food with those who can provide it. It is a simple and easy-to-use platform that allows users to request food or donate food to those in need.",
    },
    {
      name: "Dynamics Dashboard",
      link: "https://dynamics-red.vercel.app",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1735349707/Screenshot_2024-12-28_at_02.34.25.png",
      github: "https://github.com/SamuelWoniowei/dynamics.git",
      technology: ["Nextjs", "Vercel"],
      description:
        "Dynamics Dashboard is a simple and responsive dashboard clone that shows my ability to create a responsive and user-friendly dashboard.",
    },
    {
      name: "Fancy TodoApp",
      link: "https://fancytodolist.netlify.app",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704239820/Screenshot_2024-01-03_at_00.57.50.png",
      github: "https://github.com/SamuelWoniowei/todoList.git",
      technology: ["React", "Netlify"],
      description:
        "This app is designed for seamless task management with a sleek interface and a user-friendly design. Explore this project to see a demonstration of a functional Todo App with a cool dark mode option.",
    },
    {
      name: "Osusu",
      link: "https://osusu.netlify.app",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1735350017/Screenshot_2024-12-28_at_02.40.04.png",
      github: "https://github.com/SamuelWoniowei/osusu-frontend.git",
      technology: ["React", "Netlify", "MongoDB", "Express", "Clerk"],
      description:
        "Osusu is a web application that provides transparancy and digitizes the old african tradition of saving money with a trusted saver. ",
    },
  ];
  return (
    <div
      id="projects"
      className={` ${activeLink === "projects" && ""} lg:pt-28 text-text`}
    >
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
              <Image
                className="h-50 w-1/2 md:h-30 md:w-28 "
                src={project.img}
                alt="Project Image"
                width={200}
                height={100}
              />
            </div>
            <div className="md:w-4/5 text-sm md:text-md order-1 md:order-2">
              <h3 className="order-1 md:order-2">
                {project.name} <LinkTo />
              </h3>
              {project.description}

              {project.github && (
                <Link href={project.github} className="block mt-2" target="_blank">
                  <FaGithub
                    size={20}
                    className="text-name hover:text-black transition duration-200"
                  />
                </Link>
              )}
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
