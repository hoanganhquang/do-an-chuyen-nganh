import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-main">
          <div className="nav">
            <div className="img-box">
              <img src="../../assets/images/Logo.png" alt="" />
            </div>
            <ul className="menu">
              <li className="item item--active">Trang chủ</li>
              <li className="item">Sản phẩm</li>
              <li className="item">Đăng xuất</li>
            </ul>
          </div>
          <div className="features">
            <div className="img-box">
              <img src="../../assets/icons/Card.svg" alt="" />
            </div>
            <button className="primaryBtn">Tài khoản</button>
          </div>
        </div>
      </div>
    </header>
  );
}
