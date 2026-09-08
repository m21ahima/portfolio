import Hero from "./components/Hero";
import Starfield from "./components/Starfield";
import TechStack from "./components/TechStack";
import ProjectLog from "./components/ProjectLog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-night-900 text-white overflow-x-hidden">
      <Starfield />
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <ProjectLog />
        <Contact />
      </div>
    </div>
  );
}

export default App;