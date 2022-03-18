import "./Product.scss";
import shield from "../../../../assets/icons/shield.svg";
import help from "../../../../assets/icons/help.svg";
import check from "../../../../assets/icons/check.svg";

function Product() {
  return (
    <div className="products">
      <div className="callout">
        <div className="info">
          <div className="img-box">
            <img src={shield} alt="" />
          </div>

          <div className="content">
            <h5 className="title">Security Assurance</h5>
            <p className="desc">
              Our theme architecture is designed for maximize security and
              prevent malware, Dos Attack other.
            </p>
          </div>
        </div>
        <div className="info">
          <div className="img-box">
            <img src={help} alt="" />
          </div>

          <div className="content">
            <h5 className="title"> Best Customer Support</h5>
            <p className="desc">
              Our theme architecture is designed for maximize security and
              prevent malware, Dos Attack other.
            </p>
          </div>
        </div>
        <div className="info">
          <div className="img-box">
            <img src={check} alt="" />
          </div>

          <div className="content">
            <h5 className="title">Security Assurance</h5>
            <p className="desc">
              Our theme architecture is designed for maximize security and
              prevent malware, Dos Attack other.
            </p>
          </div>
        </div>
      </div>

      <div className="product-list">
        <div className="product-item">
          <div className="img-box">
            <img src={require("../../../../assets/images/Image.png")} alt="" />
          </div>

          <div className="product-desc">
            <h5 className="title">RubICons</h5>
            <p className="desc">PHP, Wordpress</p>
            <p className="price">$29,99</p>
          </div>
        </div>
        <div className="product-item">
          <div className="img-box">
            <img src={require("../../../../assets/images/Image.png")} alt="" />
          </div>

          <div className="product-desc">
            <h5 className="title">RubICons</h5>
            <p className="desc">PHP, Wordpress</p>
            <p className="price">$29,99</p>
          </div>
        </div>
        <div className="product-item">
          <div className="img-box">
            <img src={require("../../../../assets/images/Image.png")} alt="" />
          </div>

          <div className="product-desc">
            <h5 className="title">RubICons</h5>
            <p className="desc">PHP, Wordpress</p>
            <p className="price">$29,99</p>
          </div>
        </div>
        <div className="product-item">
          <div className="img-box">
            <img src={require("../../../../assets/images/Image.png")} alt="" />
          </div>

          <div className="product-desc">
            <h5 className="title">RubICons</h5>
            <p className="desc">PHP, Wordpress</p>
            <p className="price">$29,99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
