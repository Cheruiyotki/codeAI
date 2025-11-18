 import Navbar from "./components/Navbar";
 import Hero from "./components/Hero";
 import Features from "./components/Features";
 import Pricing from "./components/Pricing";
 import Testimonals from "./components/Testimonals";
 import Footer from "./components/Footer";

 function App() {
  return ( <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar />
      <Hero />
      <Features />
      <Pricing/>
      <Testimonals/>
      <Footer />
  </div>
  );
 }

 export default App;