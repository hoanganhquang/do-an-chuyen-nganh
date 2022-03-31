import "./styles/index.scss";
import { Footer, Header } from "./components";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProfilePage from "./components/MyAccount/ProfilePage/ProfilePage";

function App() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <ProfilePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
