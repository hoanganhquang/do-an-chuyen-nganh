import "./Product.scss";

export default function Product() {
  return (
    <div className="product">
      <h1 className="title">Sản phẩm</h1>

      <p className="addBtn">Thêm</p>

      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Giá tiền</th>
            <th>Hàng trong kho</th>
            <th>Hình ảnh</th>
            <th>Loại sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dâu tây</td>
            <td>Dâu tây đà lạt</td>
            <td>100.000</td>
            <td>10</td>
            <td className="img">
              <img
                src={require("../../../assets/images/banh-canh.png")}
                alt=""
              />
            </td>
            <td>Đồ ăn</td>
          </tr>
          <tr>
            <td>Dâu tây</td>
            <td>Dâu tây đà lạt</td>
            <td>100.000</td>
            <td>10</td>
            <td className="img">
              <img
                src={require("../../../assets/images/banh-canh.png")}
                alt=""
              />
            </td>
            <td>Đồ ăn</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
