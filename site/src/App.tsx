import { Routes, Route } from 'react-router-dom'
import { LenisProvider } from "./components/lenis"
import ContactSection from "./ContactSection"
import DetailsSection from "./DetailsSection"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import HumanoidSection from "./HumanoidSection"
import LoadingScreen from "./LoadingScreen"
import Newsletter from "./Newsletter"
import SpecsSection from "./SpecsSection"
import TestimonialSection from "./TestimonialSection"
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'
import CookiePolicy from './CookiePolicy'
import EmailVerification from './EmailVerification'

// Create a HomePage component with all sections except Contact
function HomePage() {
  return (
    <>
      <Hero />
      <HumanoidSection />
      <SpecsSection />
      <DetailsSection />
      <TestimonialSection />
      <Newsletter />
    </>
  )
}

function App() {
  return (
    <LenisProvider>
      <LoadingScreen />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/auth" element={<EmailVerification />} />
        </Routes>
      </main>
      <Footer />
    </LenisProvider>
  )
}

export default App