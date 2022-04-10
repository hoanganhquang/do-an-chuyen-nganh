import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Category.scss";

export default function Category() {
  return (
    <div className="category">
      <h1 className="title">Loại sản phẩm</h1>

      <p className="addBtn">Thêm</p>

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
        </tbody>
      </table>
    </div>
  );
}
