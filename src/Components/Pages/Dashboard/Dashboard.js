import "../../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainDashboard from "./DashBoard Pages/NavbarndSidebar";
import Main1 from "./DashBoard Pages/Main1";
import Main2 from "./DashBoard Pages/Main2";
import Main3 from "./DashBoard Pages/Main3";
import Main4 from "./DashBoard Pages/Main4";
import Main5 from "./DashBoard Pages/Main5";

function Dashboard() {
  return (
    <Router>
      <MainDashboard />
      <Switch>
        {/* <Route exact component={MainDashboard} /> */}
        <Route exact path="/Dashboard" component={Main1} />
        <Route exact path="/ManageUsers" component={Main2} />
        <Route exact path="/ManageUsers/AddUsers" component={Main3} />
        <Route exact path="/ManageUsers/Upgradeaccount" component={Main4} />
        <Route exact path="/ManageUsers/AddSeats" component={Main5} />
      </Switch>
    </Router>
  );
}

export default Dashboard;
