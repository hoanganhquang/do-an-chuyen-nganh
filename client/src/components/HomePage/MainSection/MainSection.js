import "./MainSection.scss";
import Category from "./Category/Category";
import Product from "./Product/Product";

function MainSection() {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main-main">
            <Category />
            <Product />
          </div>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-main">
            <div className="content" data-aos="fade-right">
              <h1 className="title">We build apps and websites</h1>
              <p className="desc">
                From multipurpose themes to niche templates, you’ll always find
                something that catches your eye.
              </p>
              <div className="button-box">
                <button className="primaryBtn">Liên hệ</button>
                <p>or see our portfolio</p>
              </div>
            </div>

            <div className="img-box" data-aos="fade-left">
              <img src={require("../../../assets/images/intro.jpg")} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
