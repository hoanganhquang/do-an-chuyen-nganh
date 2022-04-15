import "../Card/Card.scss";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <p className="card-title">Giỏ hàng</p>
          <div className="list-product">
            <table>
              <thead>
                <tr className="table-header">
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>Mứt dâu</td>
                  <td>$ 999</td>
                  <td>
                    <div className="quantity">
                      <input type="number" />
                    </div>
                  </td>
                  <td>
                    <button className="button btn-delete secondaryBtn">
                      x
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-totals">
          <div className="card-header">
            <h3>Tổng tiền trong giỏ hàng</h3>
          </div>
          <div className="card-items">
            <p>Tổng tiền</p>
            <p>$ 999</p>
          </div>
          <button className="button primaryBtn btn-checkout">
            Thanh toán giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
