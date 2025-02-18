// App.jsx
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import Features from './components/sections/Features'
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ClientsSection from './components/sections/clients'


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <WhyChooseUs/>
      <ClientsSection/>
      <Footer />
    </div>
  );
};

export default App;

