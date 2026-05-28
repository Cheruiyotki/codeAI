 import React, { useEffect } from "react";
 import Navbar from "./components/Navbar";
 import Hero from "./components/Hero";
 import Features from "./components/Features";
 import Pricing from "./components/Pricing";
 import Testimonals from "./components/Testimonals";
 import Footer from "./components/Footer";

 function App() {

  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => { 
   function handleScroll() { 
    setScolled(window.scrollY > 50);
   }

    window.addEventListener("scroll", handleScroll);     
    return () => window.removeEventListener("scroll", handleScroll);                       
  });

  return ( <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Pricing/>
      <Testimonals/>
      <Footer />
  </div>
  );
 }

 export default App;