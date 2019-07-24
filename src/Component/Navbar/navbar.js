import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink
} from "reactstrap";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const level = localStorage.getItem("level");
    return (
      <Navbar
        className="navbar shadow p-3 mb-5 bg-white rounded"
        color="light"
        light
        expand="md"
      >
        <div className="container">
          <NavbarBrand className="navbarBrand" href="/">
            <b>BOOK</b>{" "}
          </NavbarBrand>
        </div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {level === "peminjam" ? (
              <NavItem>
                <NavLink href="/">Home-Peminjam</NavLink>
                
              </NavItem>
              // <NavItem>
              //    <NavLink href="/login">Login</NavLink>
              // </NavItem>
            ) : (
              <Fragment>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              </Fragment>
            )}
            {/* // <NavItem>
            //   <NavLink href="/">Home</NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/book">Buku</NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/category">Kategori</NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/borrowing">Peminjaman</NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/borrower">User</NavLink>
            // </NavItem>
            // <NavItem>
            //   <NavLink href="/login">Login</NavLink>
            // </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
