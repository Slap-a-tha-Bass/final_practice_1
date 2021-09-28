import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex justify-content-between col-md-12 border border-dark">
            <div>
                <NavLink className="btn btn-outline-dark m-3" exact to="/">Home</NavLink>
                <NavLink className="btn btn-outline-dark m-3" exact to="/books">Books</NavLink>
            </div>
            <div>
                <NavLink className="btn btn-outline-dark m-3" exact to="/login">Login</NavLink>
                <NavLink className="btn btn-outline-dark m-3" exact to="/register">Register</NavLink>
            </div>
        </div>
    )
}

export default Navbar;
