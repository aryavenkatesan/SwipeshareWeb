import { LenisProvider } from "./components/lenis"
import DetailsSection from "./DetailsSection"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import HumanoidSection from "./HumanoidSection"
import LoadingScreen from "./LoadingScreen"
import Newsletter from "./Newsletter"
import SpecsSection from "./SpecsSection"
import TestimonialSection from "./TestimonialSection"

function App() {
  return (
    <LenisProvider>
      <LoadingScreen />
      <Header />
      <Hero />
      <HumanoidSection />
      <SpecsSection />
      <DetailsSection />
      <TestimonialSection />
      <Newsletter />
      <Footer />
    </LenisProvider>
  )
}

export default App