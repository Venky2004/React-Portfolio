import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skill from './components/skill/Skill'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import Underconstruction from './components/underconstruction/Underconstruction'
function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skill/>
    <Experience/>
    <Services/>
    <Portfolio/>
    {/* <Testimonial/> */}
    <Contact/>
    <Footer/>
   {/* <Underconstruction/>*/}
    </>
  );
}

export default App;
