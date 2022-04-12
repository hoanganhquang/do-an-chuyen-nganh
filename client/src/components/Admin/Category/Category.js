import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

import "./Category.scss";

export default function Category() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="category">
      <div className={clsx("modal", "category-modal", { show: showModal })}>
        <div className="modal-box">
          <div className="modal-header">
            <h1 className="modal-title">Thêm sản phẩm</h1>
            <FontAwesomeIcon icon={faClose} onClick={handleShowModal} />
          </div>

          <div className="modal-body">
            <label htmlFor="">Tên loại sản phẩm</label> <br />
            <input type="text" className="input" />
            <button className="primaryBtn">Thêm</button>
          </div>
        </div>
      </div>

      <h1 className="title">Loại sản phẩm</h1>

      <p className="addBtn" onClick={handleShowModal}>
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
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
          <tr>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
          <tr>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
          <tr>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
          <tr>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
          <tr>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
          <tr>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
          <tr>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
          <tr>
            <td>Đồ ăn</td>
            <td className="table-func">
              <FontAwesomeIcon icon={faTrash} />
            </td>
            <td className="table-func">
              <FontAwesomeIcon icon={faEdit} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
