import "./styles/index.scss";
import { Footer, Header, HomePage } from "./components";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
