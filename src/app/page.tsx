import Intro from './components/Intro';
import About from './components/About';
import Articles from './components/Articles';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className=" px-8  md:px-14 lg:px-36  lg:flex">
      <div className="flex-1">
        <Intro />
      </div>
      <div className="flex-1">
       <About />
       <Experience />
       <Projects />
       <Articles />
       <Footer />
      </div>
    </main>
  );
}
