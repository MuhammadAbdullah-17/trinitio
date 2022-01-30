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
import Main1 from "./Components/Pages/Dashboard/DashBoard Pages/Main1";
import Main2 from "./Components/Pages/Dashboard/DashBoard Pages/Main2";
import Main3 from "./Components/Pages/Dashboard/DashBoard Pages/Main3";
import Main4 from "./Components/Pages/Dashboard/DashBoard Pages/Main4";
import Main5 from "./Components/Pages/Dashboard/DashBoard Pages/Main5";
import Email from "./Components/Pages/Dashboard/DashBoard Pages/Emaildashboard";
import EmailFollow from "./Components/Pages/Dashboard/DashBoard Pages/EmailFollow";
import EmailRecipients from "./Components/Pages/Dashboard/DashBoard Pages/EmailRecipients";
import EmailAdded from "./Components/Pages/Dashboard/DashBoard Pages/AddedEmail";
import Integration from "./Components/Pages/Dashboard/DashBoard Pages/Appointment/Integration";
import Connect from "./Components/Pages/Dashboard/DashBoard Pages/Appointment/Connect";
import ChatSetting from "./Components/Pages/Dashboard/DashBoard Pages/Chat Support/ChatSettings";
import Chat from "./Components/Pages/Dashboard/DashBoard Pages/Chat Support/Chat";
import ChatHistory from "./Components/Pages/Dashboard/DashBoard Pages/Chat Support/ChatHistory";

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
        <Route exact path="/Dashboard" component={Main1} />
        <Route exact path="/ManageUsers" component={Main2} />
        <Route exact path="/ManageUsers/AddUsers" component={Main3} />
        <Route exact path="/ManageUsers/Upgradeaccount" component={Main4} />
        <Route exact path="/ManageUsers/AddSeats" component={Main5} />
        <Route exact path="/Email/Dashboard" component={Email} />
        <Route exact path="/Email/Dashboard/Follow" component={EmailFollow} />
        <Route
          exact
          path="/Email/Dashboard/Recipients"
          component={EmailRecipients}
        />
        <Route exact path="/Email/AddedEmail" component={EmailAdded} />
        <Route exact path="/Integration" component={Integration} />
        <Route exact path="/Connect" component={Connect} />
        <Route exact path="/ChatSetting" component={ChatSetting} />
        <Route exact path="/Chat" component={Chat} />
        <Route exact path="/ChatHistory" component={ChatHistory} />
      </Switch>
    </Router>
  );
}

export default App;
