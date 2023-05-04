import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };


  return (
    <div className="fixed-top bg-secondary">
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link className="text-success text-decoration-none" to="/">
                F<span className="text-light">oo</span>diesHub
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav className="me-3">
                  <Link
                    className="text-light text-decoration-none fs-3 fw-bold"
                    to="/"
                  >
                    Home
                  </Link>
                </Nav>
                <Nav className="me-3">
                  <Link
                    className="text-light text-decoration-none fs-3 fw-bold"
                    to="/about"
                  >
                    About Us
                  </Link>
                </Nav>
                <Nav className="me-3">
                  <Link
                    className="text-light text-decoration-none fs-3 fw-bold"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </Nav>

                <Nav className="text-light text-decoration-none fs-3 fw-bold">
                  {user ? (
                    <Link onClick={handleLogOut} className="text-light text-decoration-none fs-3 fw-bold" >
                      Logout 
                    </Link>
                  ) : (
                    <Link
                      className="text-light text-decoration-none fs-3 fw-bold"
                      to="/login"
                    >
                      Login
                    </Link>
                  )}
                </Nav>

                <Nav.Link>
                  {user && (
                    <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;
