import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import "./Order.scss";

export default function Order() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleShowDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal);
  };

  return (
    <div className="order" data-aos="fade-left">
      {/* Details modal */}
      <div className={clsx("modal", "order-modal", { show: showDetailsModal })}>
        <div className="modal-box">
          <div className="modal-header">
            <h1 className="modal-title">Chi tiết đơn hàng</h1>
            <FontAwesomeIcon icon={faClose} onClick={handleShowDetailsModal} />
          </div>

          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dây tây</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="title">Đơn hàng</h1>

      <table>
        <thead>
          <tr>
            <th>Ngày đặt</th>
            <th>Tổng tiền</th>
            <th>Người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/01/2022</td>
            <td>100.000</td>
            <td>AAAA AAA AAA</td>
            <td>
              <button className="secondaryBtn" onClick={handleShowDetailsModal}>
                Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
