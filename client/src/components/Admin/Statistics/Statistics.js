import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Statistics.scss";

export default function Statistics() {
  const [dateValue, setDateValue] = useState(new Date());

  const handleChangeDate = (date) => {
    console.log(new Date(date).toLocaleDateString("vi-VN"));
    setDateValue(date);
  };

  return (
    <div className="statistics" data-aos="fade-left">
      <h1 className="title">Thống kê</h1>

      <div className="calendar-box">
        <select name="" id="">
          <option value="">Ngày</option>
          <option value="">Tháng</option>
          <option value="">Năm</option>
        </select>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={dateValue}
          onChange={handleChangeDate}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>

      <div className="statistics-box">
        <div className="item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faMoneyCheckDollar} />
          </div>
          <div className="text">
            <p>
              10.000.000 <span>vnd</span>
            </p>
            <p>Doanh thu</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">
            <p>
              20 <span>sản phẩm</span>
            </p>
            <p>Đã bán</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faGem} />
          </div>
          <div className="text">
            <p>Bánh canh</p>
            <p>Bán chạy nhất</p>
          </div>
        </div>
      </div>
    </div>
  );
}
