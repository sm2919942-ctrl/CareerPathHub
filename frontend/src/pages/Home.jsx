import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QualificationSection from "../components/QualificationSection";
import CareerCategories from "../components/CareerCategories";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <QualificationSection />
      <CareerCategories />
      <Footer />
    </div>
  );
}

export default Home;