import Email from "../assets/Email";
import Github from "../assets/Github";
import LinkedIn from "../assets/LinkedIn";
import SideNav from "./SideNav";
export default function Intro() {
  return (
    <div className="lg:sticky lg:flex lg:top-0 lg:h-screen lg:flex-col  pt-8 md:pt-16 lg:py-28">
      <div className="font-karla text-intro">
        <h2 className="text-3xl md:text-5xl font-karla font-extrabold text-name md:mt-2 mb-1 md:mb-4">
          Samuel B. Woniowei
        </h2>
        <p className="text-md md:text-xl text-name ">Self-Taught Front-end Developer</p>
      </div>

      <SideNav />

      <div className="my-6 lg:mt-auto ">

      <div className="flex gap-3">
        <a
          href="https://github.com/samuelWoniowei"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/samuelwoniowei"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="mailto:wonioweisam@gmail.com"
        >
          <Email />
        </a>
      </div>
      </div>
    </div>
  );
}
