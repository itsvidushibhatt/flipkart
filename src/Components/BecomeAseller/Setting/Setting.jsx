import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import '../../../assets/css/Setting.css'

const Setting = () => {

 

  return (

    <main id='main' className='main'>
       <div className='shadow-sm p-2'>
        <h2 className='fs-2 fw-bold'>Setting</h2>
       </div> 

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3 setting">
        <nav>
          <ul className="nav nav-tabs ">
            <li className="nav-item ">
              <NavLink to='changePass'  className="nav-link" activeClassName="active"><i class='bx bx-lock-alt'></i> Change Password</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='supplierESignature'className="nav-link" activeClassName="active"><i class='bx bx-edit-alt' ></i> Supplier Signature </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='emailNotification' className="nav-link" activeClassName="active"> <i class='bx bx-envelope' ></i> Email Notifications</NavLink>
            </li>

          </ul>
         </nav>
        </div>
         
         <Outlet/>

      </div>
    </div>
    </main>
  );
};

export default Setting;
