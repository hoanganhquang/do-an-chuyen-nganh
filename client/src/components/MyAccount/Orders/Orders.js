<<<<<<< HEAD
import "../Orders/Orders.scss";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

const Orders = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
=======
import "./Orders.scss";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Orders = () => {
  const { token } = useSelector((state) => state.auth);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [dataOrder, setDataOrder] = useState([]);
  const [dataOrderDetail, setDataOrderDetail] = useState([]);
>>>>>>> tab

  const handleShowDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal);
  };
<<<<<<< HEAD
=======

  useEffect(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/order/notAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (typeof res.data.data == "object") {
        const arr = [];
        arr.push(res.data.data);
        setDataOrder(arr);
      } else {
        setDataOrder(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

>>>>>>> tab
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
<<<<<<< HEAD
=======
                <th>Giá bán</th>
>>>>>>> tab
                <th>Số lượng</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              <tr>
                <td>Dây tây</td>
                <td>10</td>
              </tr>
=======
              {dataOrderDetail.length > 0 &&
                dataOrderDetail.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
>>>>>>> tab
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
<<<<<<< HEAD
                <th>Số thứ tự</th>
                <th>ID đơn hàng</th>
                <th>Trạng thái</th>
=======
                <th>Ngày đặt</th>
>>>>>>> tab
                <th>Tổng tiền</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
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
=======
              {dataOrder.length > 0 &&
                dataOrder.map((item) => {
                  return (
                    <tr className="table-row" key={item._id}>
                      <td>
                        <p>
                          {new Date(item.orderDate).toLocaleDateString("vi")}
                        </p>
                      </td>
                      <td>{item.total}</td>

                      <td>
                        <button
                          className="button primaryBtn"
                          onClick={() => {
                            setDataOrderDetail(item.details);
                            handleShowDetailsModal();
                          }}
                        >
                          Chi tiết
                        </button>
                      </td>
                    </tr>
                  );
                })}
>>>>>>> tab
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
