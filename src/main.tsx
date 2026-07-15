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

// this is used to prevent FOUC (Flash of Unstyled Content), waits for the fonts to load and the DOM document.readyState to be fully loaded before making the entire webpage visible.
// window.load waits for everything — including large images, embedded videos, or any slow-loading resource anywhere on the page
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
