// components/lenis.tsx
import { useEffect, createContext, useContext, useState } from "react"
import Lenis from "@studio-freight/lenis"

const LenisContext = createContext<Lenis | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useLenis = () => useContext(LenisContext)

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  // Use state instead of ref so components re-render when lenis is ready
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(2, -15 * t),
      wheelMultiplier: 0.7,
      touchMultiplier: 1,
    })

    // Set the lenis instance to state
    setLenis(lenisInstance)

    const raf = (time: number) => {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenisInstance.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}