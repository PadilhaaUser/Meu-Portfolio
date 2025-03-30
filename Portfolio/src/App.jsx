import "./App.css";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import AnimatedSection from "./components/AnimatedSection/AnimatedSection";
import Acquirements from "./components/Acquirements/Acquirements";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

function App() {
  return (
    <>
      <ScrollIndicator />

      <AnimatedSection>
        <Intro />
      </AnimatedSection>

      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>

      <AnimatedSection>
        <Acquirements />
      </AnimatedSection>
      <br />
      <br />
      <br />
      <br />
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <br />
      <br />
      <br />
      <br />
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}

export default App;
