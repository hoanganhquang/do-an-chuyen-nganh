import "./HomePage.scss";
import "./HeroSection/HeroSection";
import HeroSection from "./HeroSection/HeroSection";
import MainSection from "./MainSection/MainSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main>
      <HeroSection />
      <div className="banner">
        <div className="container">
          <Slider {...settings}>
            <div>
              <img src={require("../../assets/images/banner1.jpg")} alt="" />
            </div>
            <div>
              <img src={require("../../assets/images/banner.jpg")} alt="" />
            </div>
            <div>
              <img src={require("../../assets/images/banner.jpg")} alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <MainSection />
    </main>
  );
}

export default HomePage;
