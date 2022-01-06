import "../../../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import MainDashboard from "./DashBoard Pages/NavbarndSidebar";
import MainDashboard1 from "./DashBoard Pages/Main1";
import Main1 from "./DashBoard Pages/Main1";

function Dashboard() {
  return (
    <Router>
      <MainDashboard />
      <Switch>
        {/* <Route exact component={MainDashboard} /> */}
        <Route exact path="/Dashboard" component={Main1} />
      </Switch>
    </Router>
  );
}

export default Dashboard;
