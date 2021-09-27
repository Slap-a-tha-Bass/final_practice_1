import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="col-md-6">
            <NavLink className="btn btn-outline-dark m-3" exact to="/">Home</NavLink>
            <NavLink className="btn btn-outline-dark m-3" exact to="/books">Books</NavLink>
        </div>
    )
}

export default Navbar;
