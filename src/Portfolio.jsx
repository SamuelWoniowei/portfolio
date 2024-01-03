
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="px-0 md:px-48 md:pt-40 md:flex">
      <div className="flex-1">
        <Intro />
      </div>
      <div className="flex-1">
        <About />

        <Skills />
      </div>
    </div>
  );
}

export default App;
