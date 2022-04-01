import "../Orders/Orders.scss";

const Orders = () => {
  return (
    <div className="container">
      <div className="orders">
        <div className="orders-title">
          <p className="title">Đơn hàng</p>
        </div>
        <div className="orders-content">
          <table>
            <thead>
              <tr className="table-header">
                <th>Số thứ tự</th>
                <th>ID đơn hàng</th>
                <th>Trạng thái</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>
                  <p>1</p>
                </td>
                <td>#123</td>
                <td>Đã nhận</td>
                <td>2</td>
                <td>$ 9999</td>
                <td>
                  <button className="button primaryBtn">Chi tiết</button>
                </td>
              </tr>
              <tr className="table-row">
                <td>
                  <p>2</p>
                </td>
                <td>#234</td>
                <td>Đã nhận</td>
                <td>1</td>
                <td>$ 1111</td>
                <td>
                  <button className="button primaryBtn">Chi tiết</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
