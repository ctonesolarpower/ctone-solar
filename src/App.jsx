import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Inquiry from "./components/Inquiry";
import SolarLanding from "./components/SolarLanding";
import SolarServices from "./components/SolarServices";
import Testimonials from "./components/Testimonials";
import TrustedBy from "./components/TrustedBy";
import WhySolar from "./components/WhySolar";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <SolarLanding />
      <TrustedBy />
      <WhySolar />
      <SolarServices />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <Inquiry />
      <Footer />
    </LanguageProvider>
  )
}


export default App;
