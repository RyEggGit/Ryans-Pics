import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Ryan's Pics <i class="fas fa-camera"></i>
          </Link>
          <Link to="/checkout" className="navbar-checkout">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
//{Button && <Button>SIGN UP</Button>}
//const styles = StyleSheet.create()
