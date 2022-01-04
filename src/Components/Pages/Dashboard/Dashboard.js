import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function Dashboard() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Dashboard;
