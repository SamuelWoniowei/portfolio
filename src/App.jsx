import Intro from './components/Intro';
import About from './components/About';
import Articles from './components/ARTICLES';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {

  return (
    <div className=" px-8  md:px-14 lg:px-36  lg:flex">
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
    </div>
  );
}

export default App;
