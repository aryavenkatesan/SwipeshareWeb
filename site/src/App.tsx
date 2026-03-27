import { Routes, Route } from 'react-router-dom'
import { LenisProvider } from "./components/lenis"
import ContactSection from "./ContactSection"
import FAQSection from "./FAQSection"
import FeaturesSection from "./FeaturesSection"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import LoadingScreen from "./LoadingScreen"
import MissionSection from "./MissionSection"
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'
import CookiePolicy from './CookiePolicy'
import EmailVerification from './EmailVerification'
import WaitlistPopup from './WaitlistPopup'

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <MissionSection />
      <FAQSection />
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
      <WaitlistPopup />
    </LenisProvider>
  )
}

export default App