import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

import "./Category.scss";

export default function Category() {
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
    <div className="category" data-aos="fade-left">
      {/* Addition modal */}
      <div className={clsx("modal", "category-modal", { show: showAddModal })}>
        <div className="modal-box">
          <div className="modal-header">
            <h1 className="modal-title">Thêm sản phẩm</h1>
            <FontAwesomeIcon icon={faClose} onClick={handleShowAddModal} />
          </div>

          <div className="modal-body">
            <label htmlFor="">Tên loại sản phẩm</label> <br />
            <input type="text" className="input" />
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
        className={clsx("modal", "category-modal", "editModal", {
          show: showEditModal,
        })}
      >
        <div className="modal-box">
          <div className="modal-header">
            <h1 className="modal-title">Chỉnh sửa</h1>
            <FontAwesomeIcon icon={faClose} onClick={handleShowEditModal} />
          </div>

          <div className="modal-body">
            <label htmlFor="">Tên loại sản phẩm</label> <br />
            <input type="text" className="input" />
            <button className="primaryBtn">Hoàn tất</button>
          </div>
        </div>
      </div>

      <h1 className="title">Loại sản phẩm</h1>

      <p className="addBtn" onClick={handleShowAddModal}>
        Thêm
      </p>

      <table>
        <thead>
          <tr>
            <th colSpan={3}>Tên</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
