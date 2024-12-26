import React,{useState} from 'react'
import '../../assets/css/Sidebar_Navbar.css'
import { Outlet,Link } from 'react-router-dom';

export default function Sidebar_Navbar() {
    const[Sidebar,setSidebar]=useState(true)
    const handle=()=> setSidebar(!Sidebar);

  return (
    <>
      
         
     <header id="header" class="header fixed-top d-flex align-items-center">
     
     <div class="d-flex align-items-center justify-content-between">
       <Link to="/" className="logo head d-flex align-items-center">
         <span class="d-lg-block">DASHBOARD</span>
       </Link>
       <i class="bx bx-menu toggle-sidebar-btn" onClick={handle}></i> 
     </div>
     
     {/* <div class="search-bar">
       <form class="search-form d-flex align-items-center">
         <input type="text"  placeholder="Search" title="Enter search keyword"/>
         <button type="submit" title="Search"><i class="bi bi-search"></i></button>
       </form>
     </div> */}
     
     <nav class="header-nav ms-auto">
       <ul class="d-flex align-items-center">
     
         {/* <li class="nav-item d-block d-lg-none">
           <a class="nav-link nav-icon search-bar-toggle " href="#">
             <i class="bi bi-search"></i>
           </a>
         </li> */}
         {/* <li class="nav-item dropdown pe-3"> */}
     
           {/* <Link to='/BecomeASellerHome' class="nav-link nav-profile d-flex align-items-center pe-0">
             <span class="d-md-block  ps-2">Logout</span>
           </Link> */}
           <li className="nav-item dropdown d-flex align-items-center me-3">
              <a className="nav-link dropdown-toggle text-dark" id="feesDropdown" role="button"><i class='bx bx-user-circle fs-2'></i></a>
                <ul className="dropdown-menu" aria-labelledby="sellDropdown">
                  <li><Link className="dropdown-item  fw-bold fs-6 ls-space" to="profileSeller/supplierDeatils">Profile</Link></li>
                  <li><Link className="dropdown-item fw-bold fs-6 ls-space" to="setting/changePass">Setting</Link></li>
                  <li><Link className="dropdown-item fw-bold fs-6 ls-space" to="/BecomeASellerHome">LogOut</Link></li>
                </ul>
             </li>
          
         {/* </li> */}
     
       </ul>
     </nav>
     
     </header>
     
     <aside id="sidebar" class={`sidebar ${Sidebar ? 'check':''}`}> 
     <ul class="sidebar-nav" id="sidebar-nav">
     
       <li class="nav-item">
         <Link to='dash' class="nav-link ">
         <i class='bx bxs-dashboard' style={{color:'#2fe9e9'}}  ></i>
           <span>Dashboard</span>
         </Link>
       </li>
       <li class="nav-item">
         <Link to='productType' class="nav-link ">
            <i class='bx bxs-category' style={{color:'#2fe9e9'}}></i>
           <span>Category</span>
         </Link> 
       </li>
       <li class="nav-item">
         <Link to='listProduct' class="nav-link ">
         <i class='bx bx-list-ul' style={{color:'#2fe9e9'}}></i>
           <span>List Products</span>
         </Link>
       </li>
       <li class="nav-item">
         <Link to='OrdersSeller/AllOrders' class="nav-link ">
         <i class='bx bxs-book' style={{color:'#2fe9e9'}}></i>
           <span>Orders</span> 
         </Link>
       </li>
       <li class="nav-item">
         <Link to='return' class="nav-link ">
         <i class='bx bx-undo' style={{color:'#2fe9e9'}}></i>
           <span>Returns</span> 
         </Link>
       </li>
       <li class="nav-item">
         <Link to='pricing' class="nav-link ">
           <i class='bx bx-rupee' style={{color:'#2fe9e9'}}></i>
           <span>Pricing</span>
         </Link>
       </li>
       <li class="nav-item">
         <Link to='paymentsSeller' class="nav-link ">
         <i class='bx bxs-wallet-alt' style={{color:'#2fe9e9'}}></i>
           <span>Payments</span>
         </Link>
       </li>
       <li class="nav-item">
         <Link to='notice' class="nav-link ">
         <i class='bx bxs-bell' style={{color:'#2fe9e9'}}></i>
           <span>Notices</span>
         </Link>
       </li>
       <li class="nav-item">
         <Link to='support/help' class="nav-link ">
         <i class='bx bx-support' style={{color:'#2fe9e9'}}></i>
           <span>Support</span>
         </Link>
       </li>

     </ul>
     </aside>



   <Outlet></Outlet>


    </>
  )
}
