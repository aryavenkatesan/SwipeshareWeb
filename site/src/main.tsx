import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from './components/toaster'

const root = createRoot(document.getElementById('root')!)

export function RootApp() {
  // Reveal elements with the animate-on-scroll class when they enter viewport
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('.animate-on-scroll')) as HTMLElement[]
    if (!els.length) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0')
          el.classList.add('opacity-100')
          observer.unobserve(el)
        }
      }
    }, { threshold: 0.1 })

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <App />
      <Toaster />
    </>
  )
}

root.render(
  <StrictMode>
    <RootApp />
  </StrictMode>
)
