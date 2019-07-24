import React, { Component, Fragment } from "react";
import isEmpty from 'lodash.isempty';
import { currentLogin } from "../../Global/redux/actions/login";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink
} from "reactstrap";
import swal from 'sweetalert';

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
  logout = () =>{
    swal({
        title: "Maaf Fitur ini Sedang Masa Perbaikan",
        icon: "warning",
      })
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
            {(level === "peminjam" ) ? 
              <Fragment>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/borrowing">Peminjaman</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="" onClick={() =>this.logout()}>Logout</NavLink>
                </NavItem>
              </Fragment>
             : (
              <Fragment>
                
              </Fragment>
            )}
            {level === "admin" ? (
              <Fragment>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/book">Buku</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/category">Kategori</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/borrowing">Peminjaman</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/borrower">User</NavLink>
                </NavItem>
              </Fragment>
            ) : (
              <Fragment>
                
              </Fragment>
            )}
            {isEmpty(level) ? (
              <Fragment>
              <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                </Fragment>
            ) :(
              <Fragment>
              </Fragment>
            ) }
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
