
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../../assets/css/OrdersBecomeASeller.css'

const OrdersHome = () => {

  
  return (

    <main id='main' className='main'>
    <div className="orders-dashboard">
      <div className="align-items-center my-3">
        <h3 className='fw-bold fs-4'>Orders <span className="text-muted fs-5">(2)</span></h3>
        <div> 
          <span className="me-4 fs-small">Export</span>
          <span className="fs-small">More options</span>
        </div>
      </div>
 
      <nav> 
        <ul className="nav nav-tabs mt-5 fs-6">
          <li className="nav-item">
            <NavLink className="nav-link" to="AllOrders" activeClassName="active">All Orders</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="PendingOrder" activeClassName="active">Pending</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="DeliverdOrder" activeClassName="active">Delivered</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="CancelledOrder" activeClassName="active">Cancelled</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />


    </div>
    </main>
  );
};

export default OrdersHome;
