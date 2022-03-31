import "./styles/index.scss";
import { AuthPage, Footer, Header } from "./components";
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
        <AuthPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
