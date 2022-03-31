import "./ProfilePage.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";
import Dashboard from "../Dashboard/Dashboard";
import Orders from "../Orders/Orders";
import Address from "../Address/Address";
import AccountDetails from "../AccountDetails/AccountDetails";

const ProfilePage = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="content">
          <div className="menu">
            <AccountMenu />
          </div>
          <div className="item">
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/orders" exact>
                <Orders />
              </Route>
              <Route path="/address" exact>
                <Address />
              </Route>
              <Route path="/account-details" exact>
                <AccountDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default ProfilePage;
