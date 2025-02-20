import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import Features from './components/sections/Features';
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ClientsSection from './components/sections/clients';
import Products from './components/sections/Products.jsx';
import About from './components/sections/About';


const Home = () => (
  <>
    <HeroSection />
    <Features />
    <About/>
    <WhyChooseUs />
    <ClientsSection />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Use lowercase for path consistency */}
        <Route path="/products" element={<Products />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;