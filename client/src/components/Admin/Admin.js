import "./Admin.scss";

import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Statistics from "./Statistics/Statistics";

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
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admin;
