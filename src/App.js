import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-slate-800">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
