import "./HomePage.scss";
import "./HeroSection/HeroSection";
import HeroSection from "./HeroSection/HeroSection";
import MainSection from "./MainSection/MainSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <MainSection />
    </main>
  );
}

export default HomePage;
