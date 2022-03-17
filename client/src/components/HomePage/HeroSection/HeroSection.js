import "./HeroSection.scss";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-main">
          <div className="content">
            <h1 className="title">Chào Mừng Đến Với Cửa Hàng Đặc Sản Đà Lạt</h1>

            <div className="search-form">
              <input type="text" className="input" />
              <button className="primaryBtn">TÌM KIẾM</button>
            </div>

            <p className="desc">
              Đến với cửa hàng bạn có thể tìm kiếm, mua sắm các loại đặc sản ở
              Đà Lạt với các sản phẩm đa dạng phong phú
            </p>
          </div>
          <div className="hero-img">
            <img src={require("../../../assets/images/hero-img.png")} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
