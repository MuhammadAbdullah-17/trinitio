import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [shown, setHide] = useState(false);
  return (
    <div className="side-right" style={{ overflow: "scroll initial" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/Dashboard"
              activeClassName="activeClicked"
              style={{ textDecoration: "" }}
            >
              <CDBSidebarMenuItem icon="home-lg">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ManageUsers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Appointment" activeClassName="activelist">
              <CDBSidebarMenuItem
                icon="calendar"
                onClick={() => setShow(!show)}
              >
                Appointment Scheduling <i class="fas fa-chevron-right"></i>
              </CDBSidebarMenuItem>
            </NavLink>
            <CDBSidebarMenu>
              {show ? (
                <div className="">
                  <NavLink
                    exact
                    to="/Appointment"
                    activeClassName="activeClicked"
                  >
                    <CDBSidebarMenuItem>
                      <i class="fas fa-chevron-right txt-sdbr mx-2"></i>
                      Dashboard
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    exact
                    to="/Integration"
                    activeClassName="activeClicked"
                  >
                    <CDBSidebarMenuItem>
                      <i class="fas fa-chevron-right txt-sdbr mx-2"></i>
                      Integrations
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/Connect" activeClassName="activeClicked">
                    <CDBSidebarMenuItem>
                      <i class="fas fa-chevron-right txt-sdbr mx-2"></i>
                      Connect your Calendar
                    </CDBSidebarMenuItem>
                  </NavLink>
                </div>
              ) : null}
            </CDBSidebarMenu>
            <NavLink exact to="/Email/Dashboard" activeClassName="activelist">
              <CDBSidebarMenuItem
                icon="envelope"
                onClick={() => setHide(!shown)}
              >
                Email Compaign <i class="fas fa-chevron-right ml-5 pl-3"></i>
              </CDBSidebarMenuItem>
            </NavLink>
            <CDBSidebarMenu>
              {shown ? (
                <div className="">
                  <NavLink
                    exact
                    to="/Email/Dashboard"
                    activeClassName="activeClicked"
                  >
                    <CDBSidebarMenuItem>
                      <i class="fas fa-chevron-right txt-sdbr mx-2"></i>
                      Dashboard
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    exact
                    to="/Email/AddedEmail"
                    activeClassName="activeClicked"
                  >
                    <CDBSidebarMenuItem>
                      <i class="fas fa-chevron-right txt-sdbr mx-2"></i>
                      Added ‘From’ Email Accounts
                    </CDBSidebarMenuItem>
                  </NavLink>
                </div>
              ) : null}
            </CDBSidebarMenu>
            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
