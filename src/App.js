import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-slate-800">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
