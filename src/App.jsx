import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skill from "./components/skill/Skill";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from "./components/project/Projects";
import ProjectDetails from "./components/project/ProjectDetail";

import { useState } from 'react'
//import Underconstruction from './components/underconstruction/Underconstruction'
function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Experience />
      <Services />
      <Projects openModal={openModal} setOpenModal={setOpenModal}/>
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
