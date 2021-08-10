import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/login" exact>Login</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/" exact>Home</NavLink>
                </div>
            </div>
        </nav>
    )
}
