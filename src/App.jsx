import Home from "./component/Home/Home"
import Navbar from "./component/navbar"
import About from "./component/About/About"
import Experience from "./component/Experience/Experience"
import Project from "./component/Project/Project"
import Footer from "./component/Footer/Footer"
function App() {

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
