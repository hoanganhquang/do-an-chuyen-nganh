import "./MainSection.scss";
import Category from "./Category/Category";
import Product from "./Product/Product";

function MainSection() {
  return (
    <section className="main">
      <div className="container">
        <div className="main-main">
          <Category />
          <Product />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
