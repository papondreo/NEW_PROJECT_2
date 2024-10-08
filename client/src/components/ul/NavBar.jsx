import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function NavBar({ user, logoutHandler }) {  // Используем деструктуризацию для props
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            {user && 
              <>
                <Link className="nav-link" to="/book/add">Add books</Link>
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </>
            }
            {!user && 
              <>
                <Link className="nav-link" to="/signup">Sign up</Link>
                <Link className="nav-link" to="/login">Login</Link>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}
