import "./styles/index.scss";

import aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Admin, AuthPage, Footer, Header, HomePage } from "./components";
import ProfilePage from "./components/MyAccount/ProfilePage/ProfilePage";
import Card from "./components/Card/Card";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  const { token } = useSelector((state) => state.auth);
  const checkAuthForRender = (component) => {
    if (token) {
      return component;
    } else {
      return <AuthPage />;
    }
  };
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/card" element={checkAuthForRender(<Card />)} />
          <Route
            path="/profile-page/*"
            element={checkAuthForRender(<ProfilePage />)}
          />
          <Route
            path="/admin/*"
            element={checkAuthForRender(<ProfilePage />)}
          />
        </Routes>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
