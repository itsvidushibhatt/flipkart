import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../../assets/css/Setting.css'

export default function ProfileSeller() {
  return (
      <>
    
  <main id='main' className='main'>
       <div className='shadow-sm p-2'>
        <h2 className='fs-2 fw-bold'>Profile</h2> 
       </div> 

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3 profile">
        <nav>
            
        <ul className="nav nav-tabs "> 
           <li className="nav-item">
              <NavLink to='bankDeatils' className="nav-link" activeClassName="active"><i class='bx bxs-bank'></i> Bank Details</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to='supplierDeatils'  className="nav-link" activeClassName="active"><i class='bx bx-user'></i> Supplier Details</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to='taxDetails'className="nav-link" activeClassName="active"><i class='bx bx-rupee'></i> Tax Details </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to='pickupAddress' className="nav-link" activeClassName="active"> <i class='bx bx-map' ></i>  Pickup Address</NavLink>
            </li>
          </ul>
         </nav>
        </div>
         
         <Outlet/>

      </div>
    </div>
    </main>
      
      </>
  )
}
