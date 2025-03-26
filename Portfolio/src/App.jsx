import "./App.css";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import AnimatedSection from "./components/AnimatedSection/AnimatedSection";

function App() {
  return (
    <>
      <AnimatedSection>
        <Intro />
      </AnimatedSection>
      <br />
      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>
    </>
  );
}

export default App;
