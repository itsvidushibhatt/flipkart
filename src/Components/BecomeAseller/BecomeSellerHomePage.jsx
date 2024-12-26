import React from "react";
import '../../assets/css/BecomeSellerHomePage.css'
import { FaUsers, FaWallet, FaPercent, FaPhoneAlt, FaShoppingBag } from "react-icons/fa";
import LoginSeller from "./LoginSeller";
import { Link, Outlet, useNavigate } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "Rajkumar Rao",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.ed0RqUUqkqGszO7DikXhagAAAA&pid=Api&P=0&h=220", 
    text:
      "On Flipkart, your listings are live in less than 2 hours and you can start selling anywhere in India. I started my business with 3 products, and today I own 3 brands and have also created employment opportunities for my family and team of 25.",
  },
  {
    id: 2,
    name: "Another Seller, Example",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Soqtvc8GbISKlazg81TPigHaFy&pid=Api&P=0&h=220", 
    text:
      "Flipkart has been instrumental in growing my business by providing access to millions of customers across India. It's a fantastic platform for sellers!",
  },
  
];


function SellerHub() {

  const navigate=useNavigate();
  
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
         <Link to={'/BecomeASellerHome'} className="navbar-brand ms-3" >
           <img src="https://static-assets-web.flixcart.com/fk-sp-static/images/flipkart_logo_color_revamp.svg" alt="Flipkart Seller Hub" style={{ height: '40px' }} />
         </Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">

             <li className="nav-item dropdown d-flex align-items-center me-3">
              <a className="nav-link dropdown-toggle" href="#" id="feesDropdown" role="button">Sell Online</a>
                <ul className="dropdown-menu fs-small" aria-labelledby="sellDropdown">
                  <li><a className="dropdown-item" href="#">Create Account</a></li>
                  <li><a className="dropdown-item" href="#">List Product</a></li>
                  <li><a className="dropdown-item" href="#">Storage & Shipping</a></li> 
                  <li><a className="dropdown-item" href="#">Receive Payment</a></li>
                  <li><a className="dropdown-item" href="#">Grow faster</a></li>
                  <li><a className="dropdown-item" href="#">Help & Support</a></li>
                </ul>
             </li>

             <li className="nav-item dropdown d-flex align-items-center me-3">
              <a className="nav-link dropdown-toggle" href="#">Fees and Commission</a>
              <ul className="dropdown-menu fs-small" aria-labelledby="feesDropdown">
                  <li><a className="dropdown-item" href="#">Commission Structure</a></li>
                  <li><a className="dropdown-item" href="#">Payment Terms</a></li>
                  <li><a className="dropdown-item" href="#">Discounts</a></li>
                </ul>
             </li>

             <li className="nav-item dropdown d-flex align-items-center me-3">
              <a className="nav-link dropdown-toggle" href="#">Grow</a>
              <ul className="dropdown-menu fs-small" aria-labelledby="growDropdown">
                  <li><a className="dropdown-item" href="#">Commission Structure</a></li>
                  <li><a className="dropdown-item" href="#">Payment Terms</a></li>
                  <li><a className="dropdown-item" href="#">Discounts</a></li>
                </ul>
              </li>

             <li className="nav-item dropdown  d-flex align-items-center me-3">
              <a className="nav-link dropdown-toggle" href="#">Learn</a>
              <ul className="dropdown-menu fs-small" aria-labelledby="learnDropdown">
                  <li><a className="dropdown-item" href="#">FAQs</a></li>
                  <li><a className="dropdown-item" href="#">Seller success stories</a></li>
                  <li><a className="dropdown-item" href="#">Seller blogs</a></li>
                </ul>
              </li>

             <li className="nav-item d-flex align-items-center">
              <a className="nav-link " href="#">Shopsy</a>
              </li>

               <li className="nav-item last_tab"><Link to='/LoginSeller'> Login</Link></li>
             <li className="nav-item last_tab">
              <Link to='/LoginSeller'> <button className="btn btn-warning ms-2">Start Selling</button></Link>
             </li>
           </ul>
     
           {/* Right-aligned items */}
           <ul className="navbar-nav ms-auto d-flex align-items-center me-4 ">
            <li className="nav-item medium_device_last_tab"> <a className="nav-link" href="#" onClick={()=>navigate('/LoginSeller')}> Login </a>  </li>
             <li className="nav-item medium_device_last_tab">
             <Link to='/LoginSeller'> <button className="btn btn-warning ms-2">Start Selling</button></Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>

      {/* Header Section */}
      <header className="header-section text-start text-black">
        <div className="container py-5 ms-5">
          <p className="breadcrumb-text">Home &gt; Sell Online</p>
          <h1>Sell Online with Flipkart</h1>
        </div>
      </header>

      {/* Feature Icons */}
      <div className="container text-center mt-4">
        <div className="row justify-content-center mt-4">
          <div className="col-md-2 col-6 mb-3">
            <div className="icon-box">
              <FaUsers size={40} style={{color:'rgb(2, 124, 213)'}}/>
              <p>45 crore+ Flipkart customers</p>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-3">
            <div className="icon-box">
              <FaWallet size={40} style={{color:'rgb(2, 124, 213)'}}/>
              <p>7* days secure &amp; regular payments</p>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-3">
            <div className="icon-box">
              <FaPercent size={40} style={{color:'rgb(2, 124, 213)'}}/>
              <p>Low cost of doing business</p>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-3">
            <div className="icon-box">
              <FaPhoneAlt size={40} style={{color:'rgb(2, 124, 213)'}}/>
              <p>One click Seller Support</p>
            </div>
          </div>
          <div className="col-md-2 col-6 mb-3">
            <div className="icon-box">
              <FaShoppingBag size={40} style={{color:'rgb(2, 124, 213)'}}/>
              <p>Access to The Big Billion Days & more</p>
            </div>
          </div>
        </div>
      </div>
      
    <div className="Seller_review ">
      <h2 className="text-center mt-5 mb-5 ms-5 fw-bold"><span style={{color:'rgb(2, 124, 213)'}} className="ms-4">Seller Success </span>Stories</h2>
      <div
        id="sellerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex justify-content-center">
                <div className="card p-4" style={{ width: "80%", maxWidth: "900px", backgroundColor: "#f0f8ff", borderRadius: "15px" }}>
                  <div className="d-flex align-items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="rounded-circle"
                      style={{
                        height: "80px",
                        width: "80px",
                        border: "3px solid yellow",
                      }}
                    />
                    <div className="ms-4">
                      <h5 className="mb-3">{review.name}</h5>
                      <p>{review.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#sellerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="false"></span>
          <span className="fs-1" style={{color:'black'}}><i class='bx bx-chevron-left'></i></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#sellerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-visible fs-1" style={{color:'black'}}><i class='bx bx-chevron-right'></i></span>
        </button>
      </div>
    </div>

      {/* login Modal */}
   {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content">
           <LoginSeller/>
         </div>
       </div>
     </div> */}
    </div>
  );
}

export default SellerHub;
