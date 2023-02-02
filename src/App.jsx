import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex w-full">
      <Navbar />
      <main className="md:pl-[300px] duration-300 w-full">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contacts />
        <Footer />
      </main>
    </div>
  )
}

export default App
