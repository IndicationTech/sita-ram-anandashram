import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import ScrollRouteSync from "../components/ScrollRouteSync";

export default function Home() {
  return (
    <>
      <ScrollRouteSync />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Donate />
      <Footer />
    </>
  );
}
