import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Contacts from './pages/Contacts'
import Footer from './components/layout/Footer'

const Skills = lazy(() => import('./pages/Skills'));

function App() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen text-black selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Home />
        <div className="bg-[#101010]">
          <About />
          <Suspense fallback={null}>
            <Skills />
          </Suspense>
        </div>
        <Works />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
