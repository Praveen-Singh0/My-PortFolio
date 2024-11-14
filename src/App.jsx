import ScrollNav from "./components/ScrollNav";
import MainSection from "./components/MainScection";
import EducationSection from "./components/EducationSection";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <ScrollNav />
      <div id="home">
        <MainSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
