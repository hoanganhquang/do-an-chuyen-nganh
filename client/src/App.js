import "./styles/index.scss";

import aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Admin, AuthPage, Footer, Header, HomePage } from "./components";
import ProfilePage from "./components/MyAccount/ProfilePage/ProfilePage";
import Card from "./components/Card/Card";

function App() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/profile-page/*" element={<ProfilePage />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
