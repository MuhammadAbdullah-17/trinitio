import "../../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainDashboard from "./DashBoard Pages/NavbarndSidebar";
import Main1 from "./DashBoard Pages/Main1";
import Main2 from "./DashBoard Pages/Main2";
import Main3 from "./DashBoard Pages/Main3";
import Main4 from "./DashBoard Pages/Main4";
import Main5 from "./DashBoard Pages/Main5";
import Email from "./DashBoard Pages/Emaildashboard";
import EmailFollow from "./DashBoard Pages/EmailFollow";
import EmailRecipients from "./DashBoard Pages/EmailRecipients";
import EmailAdded from "./DashBoard Pages/AddedEmail";
import Integration from "./DashBoard Pages/Appointment/Integration";
import Connect from "./DashBoard Pages/Appointment/Connect";
import ChatSetting from "./DashBoard Pages/Chat Support/ChatSettings";
import Chat from "./DashBoard Pages/Chat Support/Chat";
import ChatHistory from "./DashBoard Pages/Chat Support/ChatHistory";
import ChatSentiment from "./DashBoard Pages/Chat Support/ChatSentiment";

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
        <Route exact path="/ChatSentiment" component={ChatSentiment} />
      </Switch>
    </Router>
  );
}

export default Dashboard;
