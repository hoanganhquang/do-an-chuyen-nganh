import "./Admin.scss";

import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Statistics from "./Statistics/Statistics";
import Category from "./Category/Category";
import Product from "./Product/Product";

function Admin() {
  return (
    <main>
      <section className="admin">
        <div className="container">
          <div className="admin-main">
            <SideBar />

            <div className="admin-content">
              <Routes>
                <Route path="statistics" element={<Statistics />} />
                <Route path="categories" element={<Category />} />
                <Route path="products" element={<Product />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admin;
