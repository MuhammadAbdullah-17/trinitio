import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Calender from "./Components/Pages/Login Header/Calender";
import Calender1 from "./Components/Pages/Login Header/Calender1";
import Clock from "./Components/Pages/Login Header/Clock";
import SignUp from "./Components/Pages/Login Header/Signup";
import Signupnext2 from "./Components/Pages/Login Header/Signupnext2";
import Signupnext3 from "./Components/Pages/Login Header/Signupnext3";
import Signupnext4 from "./Components/Pages/Login Header/Signupnext4";
import Singupnext1 from "./Components/Pages/Login Header/Singupnext1";
import Welcome from "./Components/Pages/Login Header/Welome";
import Personalize from "./Components/Pages/Login Header/Personalize";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/Signup" component={Singupnext1} />
        <Route path="/Signupnext2" component={Signupnext2} />
        <Route path="/Signupnext3" component={Signupnext3} />
        <Route path="/Login" component={Signupnext4} />
        <Route path="/Welcome" component={Welcome} />
        <Route path="/Calender" component={Calender} />
        <Route path="/Calender1" component={Calender1} />
        <Route path="/Clock" component={Clock} />
        <Route path="/Personalize" component={Personalize} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
