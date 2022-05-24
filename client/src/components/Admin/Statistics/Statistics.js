import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

import "./Statistics.scss";

export default function Statistics() {
  const { token } = useSelector((state) => state.auth);
  const [dateValue, setDateValue] = useState(new Date());
  const [dataStatistics, setDataStatistics] = useState({});

  const handleChangeDate = (date) => {
    console.log(new Date(date).toLocaleDateString("vi-VN"));
    setDateValue(date);
  };

  useEffect(async () => {
    let month = dateValue.getMonth() + 1;
    let date = dateValue.getDate();
    if (month < 10) month = "0" + month;
    if (date < 10) month = "0" + date;
    const dates = dateValue.getFullYear() + "-" + month + "-" + date;
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/statistics?date=${dates}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = res.data.data.reduce(
        (count, item) => {
          return {
            total: count.total + item.total,
            quan: count.quan + item.products.length,
          };
        },
        { total: 0, quan: 0 }
      );

      let maxProduct = [];
      res.data.data.forEach((item) => {
        maxProduct = [...maxProduct, ...item.products];
      });

      let max = { quantity: 0 };
      maxProduct.forEach((item) => {
        if (max.quantity < item.quantity) {
          max = item;
        }
      });

      setDataStatistics({
        ...result,
        max: max.name,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="statistics">
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
              {dataStatistics.total} <span>vnd</span>
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
              {dataStatistics.quan} <span>sản phẩm</span>
            </p>
            <p>Đã bán</p>
          </div>
        </div>
        <div className="item">
          <div className="icon-box">
            <FontAwesomeIcon icon={faGem} />
          </div>
          <div className="text">
            <p style={{ fontSize: "1rem" }}>{dataStatistics.max}</p>
            <p>Bán chạy nhất</p>
          </div>
        </div>
      </div>
    </div>
  );
}
