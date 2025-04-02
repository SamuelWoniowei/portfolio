export default function Experience() {
  const history = [
    {
      date: "JAN 2025 - MAR 2025",
      role: "Frontend Developer",
      company: "Necterium Technologies",
      technology: ["NuxtJs"],
      description:
        "I developed the entire frontend architecture, building scalable, maintainable landing pages and dashboard interfaces from scratch in under two months, optimizing performance and responsiveness, integrating APIs for dynamic interaction, and ensuring clean, well-documented code for smooth handoff to future developers.",
    },
    {
      date: "NOV 2021 - PRESENT",
      role: "Frontend Engineer",
      company: "Akaani",
      technology: [
        "TailwindCss",
        "React",
        "Javascript",
        "React Native",
        "Expo",
      ],
      description:
        "I took the lead on developing the UI for Akaani’s mobile app using React Native, building over 80% of the interface and creating a seamless, accessible user experience. My work directly contributed to the app’s growth, now with over 1,500 active users. I collaborated closely with designers and the backend team to ensure smooth data flow and a cohesive design. Beyond coding, I brought fresh ideas to team meetings, helping shape the app’s functionality and overall impact.",
    },
    {
      date: "JAN 2019 - OCT 2021",
      role: "Web Developer",
      company: "Freelance",
      technology: ["PHP", "React", "Javascript"],
      description:
        "As a versatile Freelance Web Developer, I delivered customized web development services using PHP, ReactJS, and JavaScript. Utilized MySQL for efficient database design, ensuring seamless data management. Implemented custom functionality, collaborating closely with clients for effective web solutions. Emphasized responsive design principles for a seamless user experience across devices. Proactively maintained and optimized codebases, staying updated on industry standards for enhanced performance and scalability.",
    },
    {
      date: "MAY 2018 - DEC 2018",
      role: "Web Developer",
      company: "Afridash",
      technology: ["Ruby", "React", "React Native", "Javascript"],
      description:
        "Collaborated as a Backend and Frontend Developer on the Penlite app, contributing to a robust backend, designing efficient APIs, and creating engaging frontend interfaces. Implemented server-side logic for enhanced security, ensuring seamless integration without direct collaboration with other frontend developers. Led the 'amuam' mobile app's React Native UI development, applying responsive design and staying updated on mobile trends for innovative solutions.",
    },
    {
      date: "DEC 2017",
      role: "Web Designer",
      company: "CareerLyft",
      technology: ["HTML", "CSS"],
      description: "Converted Resume web designs to html and css",
    },
  ];
  return (
    <div className=" lg:pt-28 text-text" id="experience">
      <h2 className="lg:hidden text-name font-bold mt-20 mb-8">EXPERIENCE</h2>
      {history.map((hist, idx) => (
        <div
          className="flex flex-col md:flex-row mb-14 wrap font-inter"
          key={idx}
        >
          <div className="text-sm md:w-1/3 md:mt-2 md:text-sm font-karla">
            {hist.date}
          </div>
          <div className="md:w-2/3  ">
            <h3 className="font-semibold flex font-karla text-lg">
              {hist.role} - {hist.company}
            </h3>
            <p className="mt-3 font-light text-sm md:text-md">
              {hist.description}
            </p>
            <div className="flex flex-wrap mt-3 text-xs gap-1">
              {hist.technology.map((tech, idx) => (
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
      ))}
      {/* <a href="/samuelwoniowei.pdf" target="_blank" className=' font-karla font-semibold' rel="noopener noreferrer">View Full Resume <LookTo /></a> */}
    </div>
  );
}
