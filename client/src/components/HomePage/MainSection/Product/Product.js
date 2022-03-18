import "./Product.scss";

function Product() {
  return (
    <div className="products" data-aos="zoom-in">
      <div className="products-header">
        <h1 className="title">Sản phẩm</h1>
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
