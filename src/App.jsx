import About from "./components/About"
import Hero from "./components/Hero"
import OurServices from "./components/OurServices"
import Partners from "./components/Partners"
import PropLocation from "./components/PropLocations"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="">
      <Hero/>
      <PropLocation/>
      <OurServices/>
      <About/>
      <Partners/>
      <Contact/>
    </div>
  )
}
export default App