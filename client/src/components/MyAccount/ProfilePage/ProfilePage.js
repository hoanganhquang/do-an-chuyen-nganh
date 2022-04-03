import "./ProfilePage.scss";
import AccountMenu from "../AccountMenu/AccountMenu";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Orders from "../Orders/Orders";
import AccountDetails from "../AccountDetails/AccountDetails";

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="menu">
          <AccountMenu />
        </div>
        <div className="item">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="account-details" element={<AccountDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
