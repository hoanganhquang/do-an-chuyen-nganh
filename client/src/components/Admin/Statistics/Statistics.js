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

      <div className="statistics-box"></div>
    </div>
  );
}
