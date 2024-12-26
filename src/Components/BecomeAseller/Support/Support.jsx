import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function Support() {
  return (

    <main id="main" className="main">
    <div className="container mt-4">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Support</h2>
        <button className="btn btn-outline-primary">Visit Learning Hub</button>
      </header>

      {/* Tabs */}
      <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
           <NavLink className="nav-link" to="help" activeClassName="active">Help</NavLink>
          </li>
        <li className="nav-item">
           <NavLink className="nav-link" to="myTicket" activeClassName="active">My Tickets</NavLink>
        </li>
      </ul>

     <Outlet />
    </div>

    </main>
  );
}

export default Support;
