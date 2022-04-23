import "../Orders/Orders.scss";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

const Orders = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleShowDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal);
  };
  return (
    <div className="container">
      <div
        className={clsx("modal", "orders-modal", { show: showDetailsModal })}
      >
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
      <div className="orders">
        <div className="orders-title">
          <p className="title">Đơn hàng</p>
        </div>
        <div className="orders-content">
          <table>
            <thead>
              <tr className="table-header">
                <th>Số thứ tự</th>
                <th>ID đơn hàng</th>
                <th>Trạng thái</th>
                <th>Tổng tiền</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>
                  <p>1</p>
                </td>
                <td>#123</td>
                <td>Đã nhận</td>
                <td>$ 9999</td>
                <td>
                  <button
                    className="button primaryBtn"
                    onClick={handleShowDetailsModal}
                  >
                    Chi tiết
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
