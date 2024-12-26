import React from 'react';
import '../../../assets/css/OrdersBecomeASeller.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OrderDetailsSeller = () => {

    const navigate=useNavigate();
    const location = useLocation();
    const { order } = location.state || {};
    console.log(order)
    
  return (
  <main id='main' className='main'>
   
   <div className="order-details-container">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/dashboard/OrdersSeller/AllOrders">Orders</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Order details</li>
        </ol>
      </nav>

      {/* Order Header */}
      <div className="order-header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="order-title">Order #{order.orderId}</h1>
          <div className="order-status">
            <span className= {`me-2 ${order.paymentDetails.paymentStatus}=== paid ? badge bg-success : badge bg-danger`}>{order.paymentDetails.paymentStatus}</span>
            <span className="badge bg-info">Fulfilled</span>
            <span className="order-date ms-3">
              <i className="bi bi-calendar3 me-1"></i>
              Aug 17, 2020, 5:48 (ET)
            </span>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="order-navigation">
          <i className="bi bi-arrow-left-circle me-2" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
          <i className="bi bi-arrow-right-circle" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='mt-2'> 
          <span className="me-4 fs-small text-muted">Export</span>
          <span className="fs-small text-muted">More options</span>
        </div>
    </div>
    
    <div className='grey-line'></div>

    <div className="container my-5">
    <div className="row">
      <div className="col-md-8">
      <div className="order-details card p-3">
      <div className="d-flex justify-content-between">
        <h5>Order details <span className="text-muted">({order.items.length})</span></h5>
        <a href="#edit" className="text-primary">Edit</a>
      </div> 
     <div className='grey-line'></div>

      {order.items.map((d,k)=>(
          <div className="order-item mt-3">
          <img src="https://via.placeholder.com/60" alt="Product" className="order-img"/>
          <div>
            <p className="fw-bold me-5">{d.productName}</p>
            <p className="mb-1 fs-small"><strong>model:</strong> X274hf</p>
            <p className="mb-1 fs-small"><strong>Color:</strong> Green</p>
            {/* <p className="mb-1"><strong>Size:</strong> UK 7</p> */}
          </div>
          <div className="text-end d-flex justify-content-between align-items-center">
            <p className="me-5">₹{d.price}</p>
            <p className="me-5">Qty: {d.quantity}</p>
            <p className="fw-bold">₹{d.total}</p>
          </div>
        </div>
      ))
      }
      

      {/* Repeat the block above for additional items */}
      <div className='row d-flex justify-content-end'>
      <div className="order-summary col-md-4  mt-4">
        <p className="d-flex justify-content-between"><span>Subtotal:</span> <span>₹{order.totalAmount}</span></p>
        <p className="d-flex justify-content-between"><span>Shipping fee:</span> <span>₹ 0.00</span></p>
        <p className="d-flex justify-content-between"><span>Tax:</span> <span>₹ 0.00</span></p>
        <p className="d-flex justify-content-between fw-bold"><span>Total:</span> <span>₹{order.totalAmount}</span></p>
      </div>
      </div>
    </div>
      </div>

     {/* Customer Information */}
      <div className="col-md-4">
      <div className="customer-info card p-3">
      <h5>Customer</h5>
      <div className="customer-profile d-flex align-items-center mt-3">
        <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-circle"/>
        <div className="ms-3">
          <p className="mb-1 fw-bold">{order.customer.name}</p>
          <a href="#orders" className="text-primary">{order.items.length} orders</a>
        </div>
      </div>
      <div className='grey-line'></div>
      <div className="customer-contact mt-3">
        <p><strong>Contact info</strong> <a href="#edit" className="text-primary float-end">Edit</a></p>
        <p>{order.customer.email}</p>
        <p>📞 {order.customer.mobileNumber}</p>
      </div>
      <div className='grey-line'></div>

      <div className="customer-address mt-3">
        <p><strong>Shipping address</strong> <a href="#edit" className="text-primary float-end">Edit</a></p>
        <p>{order.shippingAddress.street}-{order.shippingAddress.pincode}</p>
        <p>{order.shippingAddress.city},{order.shippingAddress.state},{order.shippingAddress.country}</p>
      </div>

    </div>
      </div>

    </div>
  </div>

  </main>

    
  );
};

export default OrderDetailsSeller;
