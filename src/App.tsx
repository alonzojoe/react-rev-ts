import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Features from "./components/Features";
function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
      <Partners />
      <Features />
    </div>
  );
}

export default App;
