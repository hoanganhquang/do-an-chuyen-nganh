import Subscribe from "../Subscribe/Subscribe";
import "./Category.scss";

function Category() {
  return (
    <div className="category">
      <div className="category-header">
        <p className="title">Loại sản phẩm</p>
      </div>
      <div className="category-body">
        <ul className="category-list">
          <li className="category-item active">Trái cây</li>
          <li className="category-item">Đồ uống</li>
          <li className="category-item">Đồ uống</li>
          <li className="category-item">Đồ uống</li>
          <li className="category-item">Đồ uống</li>
        </ul>
      </div>

      <Subscribe />
    </div>
  );
}

export default Category;
