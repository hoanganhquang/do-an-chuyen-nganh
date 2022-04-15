import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

import "./Product.scss";

export default function Product() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDelModal, setshowDelModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  const handleShowAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleShowDelModal = () => {
    setshowDelModal(!showDelModal);
  };

  const handleShowEditModal = () => {
    setshowEditModal(!showEditModal);
  };

  return (
    <div className="product">
      {/* Addition modal */}
      <div className={clsx("modal", "product-modal", { show: showAddModal })}>
        <div className="modal-box">
          <div className="modal-header">
            <h1 className="modal-title">Thêm sản phẩm</h1>
            <FontAwesomeIcon icon={faClose} onClick={handleShowAddModal} />
          </div>

          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Tên sản phẩm</label> <br />
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="">Mô tả</label> <br />
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="">Giá tiền</label> <br />
              <input type="number" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="">Hàng trong kho</label> <br />
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="">Hình ảnh</label> <br />
              <input type="file" />
            </div>
            <div className="form-control">
              <label htmlFor="">Loại sản phẩm</label> <br />
              <select name="" className="input">
                <option value="">dasdsa</option>
                <option value="">dasdsa</option>
                <option value="">dasdsa</option>
              </select>
            </div>
            <button className="primaryBtn">Thêm</button>
          </div>
        </div>
      </div>

      {/* Deletion modal */}
      <div className={clsx("modal", "delModal", { show: showDelModal })}>
        <div className="modal-box">
          <div className="modal-header">
            <h1 className="modal-title">Bạn chắc chắn muốn xoá?</h1>
            <FontAwesomeIcon icon={faClose} onClick={handleShowDelModal} />
          </div>

          <div className="modal-body">
            <button className="primaryBtn">Xoá</button>
            <button className="secondaryBtn" onClick={handleShowDelModal}>
              Huỷ
            </button>
          </div>
        </div>
      </div>

      {/* Edition modal */}
      <div
        className={clsx("modal", "product-modal", "editModal", {
          show: showEditModal,
        })}
      >
        <div className="modal-box">
          <div className="modal-header">
            <h1 className="modal-title">Chỉnh sửa</h1>
            <FontAwesomeIcon icon={faClose} onClick={handleShowEditModal} />
          </div>

          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Tên sản phẩm</label> <br />
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="">Mô tả</label> <br />
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="">Giá tiền</label> <br />
              <input type="number" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="">Hàng trong kho</label> <br />
              <input type="text" className="input" />
            </div>
            <div className="form-control">
              <label htmlFor="">Hình ảnh</label> <br />
              <input type="file" />
            </div>
            <div className="form-control">
              <label htmlFor="">Loại sản phẩm</label> <br />
              <select name="" className="input">
                <option value="">dasdsa</option>
                <option value="">dasdsa</option>
                <option value="">dasdsa</option>
              </select>
            </div>
            <button className="primaryBtn">Hoàn tất</button>
          </div>
        </div>
      </div>

      <h1 className="title">Sản phẩm</h1>

      <p className="addBtn" onClick={handleShowAddModal}>
        Thêm
      </p>

      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Giá tiền</th>
            <th>Hàng trong kho</th>
            <th>Hình ảnh</th>
            <th>Loại sản phẩm</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dâu tây</td>
            <td>Dâu tây đà lạt</td>
            <td>100.000</td>
            <td>10</td>
            <td className="img">
              <img
                src={require("../../../assets/images/banh-canh.png")}
                alt=""
              />
            </td>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} onClick={handleShowDelModal} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} onClick={handleShowEditModal} />
            </td>
          </tr>
          <tr>
            <td>Dâu tây</td>
            <td>Dâu tây đà lạt</td>
            <td>100.000</td>
            <td>10</td>
            <td className="img">
              <img
                src={require("../../../assets/images/banh-canh.png")}
                alt=""
              />
            </td>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} onClick={handleShowDelModal} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} onClick={handleShowEditModal} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
