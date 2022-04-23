import Subscribe from "../Subscribe/Subscribe";
import "./Category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Category() {
  return (
    <div className="category" data-aos="fade-right">
      <div className="category-box">
        <div className="category-header">
          <p className="title">Địa phương</p>
        </div>
        <div className="category-body">
          <div className="category-list">
            <div className="category-item">
              <div className="text-box">
                Miền Bắc
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
              <ul className="province-list">
                <li>
                  <a>Hà Nội</a>
                </li>
                <li>
                  <a>Hà Nội</a>
                </li>
                <li>
                  <a>Hà Nội</a>
                </li>
              </ul>
            </div>
            <div className="category-item ">
              <div className="text-box">
                Miền Bắc
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
              <ul className="province-list">
                <li>
                  <a>Hà Nội</a>
                </li>
                <li>
                  <a>Hà Nội</a>
                </li>
                <li>
                  <a>Hà Nội</a>
                </li>
                <li>
                  <a>Hà Nội</a>
                </li>
                <li>
                  <a>Hà Nội</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
    </div>
  );
}

export default Category;
