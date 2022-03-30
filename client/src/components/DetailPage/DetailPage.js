import "./DetailPage.scss";

function DetailPage() {
  // const price1 = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <main>
      <section className="detail">
        <div className="container">
          <div className="detail-main">
            <div className="header">
              <div className="title-box">
                <div className="img-box">
                  <img
                    src={require("../../assets/images/LogoItem.png")}
                    alt=""
                  />
                </div>

                <h1 className="title">Tên sản phẩm</h1>
              </div>

              <p className="desc">Mô tả sản phẩm</p>
            </div>

            <div className="body">
              <div className="img-box">
                <img
                  src={require("../../assets/images/banh-canh.png")}
                  alt=""
                />
              </div>

              <div className="product-info-card">
                <div className="card-header">
                  <p className="price-text">Tổng giá</p>
                  <p className="price-number">
                    100000 <span className="vnd">VND</span>
                  </p>
                </div>
                <div className="card-body">
                  <div className="price-detail">
                    <p className="price-text">Số lượng</p>
                    <input type="number" />
                  </div>
                  <div className="price-detail">
                    <p>Tổng tiền hàng</p>
                    <p>
                      100000 <span className="vnd">VND</span>
                    </p>
                  </div>
                  {/* <div className="price-detail">
                    <p>Phí vận chuyển</p>
                    <p>
                      20000 <span className="vnd">VND</span>
                    </p>
                  </div> */}
                </div>
                <div className="card-footer">
                  <button className="primaryBtn">ADD TO CARD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DetailPage;
