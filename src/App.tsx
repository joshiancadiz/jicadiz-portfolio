import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Works from './sections/Works'
import Contacts from './sections/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen text-black selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Home />
        <div className="bg-[#101010]">
          <About />
          <Skills />
        </div>
        <Works />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
