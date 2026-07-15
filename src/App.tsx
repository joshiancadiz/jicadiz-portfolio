import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Works from './pages/Works'
import Contacts from './pages/Contacts'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen text-black selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Home />
        {/* will-change-transform creates a new layer that is rendered separately by the GPU, making this section loads faster, prevents a flashing white at initial load */}
        <div className="bg-[#101010] will-change-transform">
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
