import "../Address/Address.scss";

const Address = () => {
  return (
    <div className="container">
      <div className="address">
        <div className="address-title">
          <p className="title">Địa chỉ</p>
          <p className="edit-address">Chỉnh sửa</p>
        </div>
        <div className="address-content">
          <div className="address-item">
            <p className="item-title">Tên</p>
            <p className="item-content">Dũng</p>
          </div>
          <div className="address-item">
            <p className="item-title">Email</p>
            <p className="item-content">dungpham4320@gmail.com</p>
          </div>
          <div className="address-item">
            <p className="item-title">Số điện thoại</p>
            <p className="item-content">0785485418</p>
          </div>
          <div className="address-item">
            <p className="item-title">Địa chỉ</p>
            <p className="item-content">76 Nguyễn Văn Trỗi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
