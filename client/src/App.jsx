import { Navbar } from "./layouts/Navbar"
import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Footer } from "./layouts/Footer"


function App() {
  

  return (
  <div className=" min-h-screen overflow-x-hidden bg-gray-800 text-white ">
    <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
      </main>
      <Footer/>
  </div>
  )
}

export default App
