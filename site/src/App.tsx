import { LenisProvider } from "./components/lenis"
import DetailsSection from "./DetailsSection"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import HumanoidSection from "./HumanoidSection"
import Newsletter from "./Newsletter"
import SpecsSection from "./SpecsSection"
import TestimonialSection from "./TestimonialSection"
import LoopyBackground from "./components/LoopyBackground"

function App() {
  return (
    <LenisProvider>
      <LoopyBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <HumanoidSection />
        <SpecsSection />
        <DetailsSection />
        <TestimonialSection />
        <Newsletter />
        <Footer />
      </div>
    </LenisProvider>
  )
}

export default App