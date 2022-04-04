import "./styles/index.scss";
import { BillingCheckout, Footer, Header, HomePage } from "./components";
import ProfilePage from "./components/MyAccount/ProfilePage/ProfilePage";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <BillingCheckout />
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile-page/*" element={<ProfilePage />} />
        </Routes> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
