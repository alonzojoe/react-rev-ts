import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Action from "./components/Action";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
      <Partners />
      <Features />
      <Stats />
      <Intro />
      <Testimonial />
      <Faq />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
