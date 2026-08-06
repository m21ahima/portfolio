import Hero from "./components/Hero";
import Starfield from "./components/Starfield";

function App() {
  return (
    <div className="relative min-h-screen bg-night-900 text-white">
      <Starfield />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export default App;