import "./Header.scss";
import card from "../../assets/icons/Card.svg";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/AuthSlice";

function Header() {
  const [headerScrollStyle, setHeaderScrollStyle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderScrollStyle(window.scrollY > 150);
    });
  });

  const handleNavigateCard = () => {
    navigate("/card");
  };

  const handleNavigateAccount = () => {
    navigate("/profile-page/dashboard");
    const handleLogOut = () => {
      localStorage.removeItem("token");
      dispatch(signOut());
      navigate("/auth");
    };

    return (
      <header className={clsx({ scrollShow: headerScrollStyle })}>
        <div className="container">
          <div className="header-main">
            <div className="nav">
              <div className="img-box">
                <img src={require("../../assets/images/Logo.png")} alt="" />
              </div>
              <ul className="menu">
                <li className="item item--active">
                  <NavLink to="/">Trang chủ</NavLink>
                </li>
                <li className="item">
                  <a href="/#products">Sản phẩm</a>
                </li>
                <li className="item" onClick={handleLogOut}>
                  <a style={{ color: "red" }}>Đăng xuất</a>
                </li>
              </ul>
            </div>
            <div className="features">
              <div className="img-box" onClick={handleNavigateCard}>
                <img src={card} alt="" />
                {/* <div className="number">5</div> */}
              </div>
              <button className="primaryBtn" onClick={handleNavigateAccount}>
                Tài khoản
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };
}

export default Header;
