import "./MainSection.scss";
import Category from "./Category/Category";

function MainSection() {
  return (
    <section className="main">
      <div className="container">
        <div className="main-main">
          <Category />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
