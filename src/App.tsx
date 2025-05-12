import './App.css'
import { Hero } from './components/Hero'
import { WhoWeAre } from './components/WhoWeAre'
import { FoundingPartners } from './components/FoundingPartners'
import { TrustedBy } from './components/TrustedBy'
import { CompanyPortfolio } from './components/CompanyPortfolio'
import { Footer } from './components/Footer'
import { ContactUs } from './components/ContactUs'

function App() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <FoundingPartners />
      <TrustedBy />
      <CompanyPortfolio />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
