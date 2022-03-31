import "./AccountMenu.scss";
import { NavLink } from "react-router-dom";

const AccountMenu = () => {
  return (
    <div className="container">
      <div className="menu-header">
        <h3>Trang cá nhân</h3>
      </div>
      <div className="menu-items">
        <NavLink to="/" className="items" activeClassName="active" exact={true}>
          Bảng điều khiển
        </NavLink>
        <NavLink className="items" to="/orders">
          Đơn hàng
        </NavLink>
        <NavLink className="items" to="/address">
          Địa chỉ
        </NavLink>
        <NavLink className="items" to="/account-details">
          Thông tin tài khoản
        </NavLink>
        <NavLink className="items log-out" to="/log-out">
          Đăng xuất
        </NavLink>
      </div>
    </div>
  );
};

export default AccountMenu;
