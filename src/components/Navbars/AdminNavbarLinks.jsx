/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <span>
        <i className="fa fa-globe" />
        <span className="notification">5</span>
      </span>
    );
    return (
      <>
        <Nav className="mr-auto">
          <Nav.Link eventKey={1}>
            <i className="fa fa-dashboard" />
          </Nav.Link>
          <NavDropdown
            title={notification}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item eventKey={2.1}>Notification 1</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.2}>Notification 2</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.3}>Notification 3</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.4}>Notification 4</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.5}>Another notifications</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">
            <i className="fa fa-search" />
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">
            Account
          </Nav.Link>
          <NavDropdown
            // eventKey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <NavDropdown.Item eventKey={2.1}>Action</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.2}>Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.3}>Something</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.4}>Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey={2.5}>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey={2.5}>Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavItem >
            <Nav.Link eventKey={3} href="#">Log out</Nav.Link>
          </NavItem>
        </Nav>
      </>
    );
  }
}

export default AdminNavbarLinks;
