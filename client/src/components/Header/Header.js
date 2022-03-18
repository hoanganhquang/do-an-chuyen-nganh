import "./Header.scss";
import card from "../../assets/icons/Card.svg";

import clsx from "clsx";
import { useEffect, useState } from "react";

function Header() {
  const [headerScrollStyle, setHeaderScrollStyle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderScrollStyle(window.scrollY > 200);
    });
  });

  return (
    <header className={clsx({ scrollShow: headerScrollStyle })}>
      <div className="container">
        <div className="header-main">
          <div className="nav">
            <div className="img-box">
              <img src={require("../../assets/images/Logo.png")} alt="" />
            </div>
            <ul className="menu">
              <li className="item item--active">Trang chủ</li>
              <li className="item">Sản phẩm</li>
              <li className="item">Đăng xuất</li>
            </ul>
          </div>
          <div className="features">
            <div className="img-box">
              <img src={card} alt="" />
              <div className="number">5</div>
            </div>
            <button className="primaryBtn">Tài khoản</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
