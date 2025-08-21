import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Intro from "./components/Intro";
function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
      <Partners />
      <Features />
      <Stats />
      <Intro />
    </div>
  );
}

export default App;
