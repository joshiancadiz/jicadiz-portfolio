import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/sofia-sans-condensed/400.css'
import '@fontsource/sofia-sans-condensed/500.css'
import '@fontsource/sofia-sans-condensed/700.css'
import '@fontsource/spline-sans-mono/400.css'
import '@fontsource/spline-sans-mono/500.css'
import '@fontsource/spline-sans-mono/700.css'

const revealPage = () => {
  document.body.style.visibility = 'visible'
}

Promise.all([
  document.fonts.ready,
  new Promise(resolve => {
    if (document.readyState === 'complete') resolve(null)
    else window.addEventListener('load', resolve, { once: true })
  })
]).then(revealPage)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
