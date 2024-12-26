import React from "react";
import '../../assets/css/PaymentsSeller.css'

const PaymentsSeller = () => {
  return (

    <main id="main" className="main">
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Payments</h2>
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-primary">
            <i className="bi bi-download"></i> Download
          </button>
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Search here..."
          />
        </div>
      </div>

      <div className="row">
        {/* Left Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Payments to Date</h5>
              <h3>₹0</h3>
              <div className="grey-line"></div>
              <div className="d-flex justify-content-between align-items-center mt-4">
              <p className="card-text mb-3">Last Payment: ₹0</p>
              <a href="#" className="btn btn-sm btn-outline-primary shadow-none">
                View Details
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Total Outstanding Payment</h5>
              <h3>₹0</h3>
              <div className="grey-line"></div> 
              <div className="d-flex justify-content-between align-items-center mt-4">
              <p className="card-text mb-3">Next Payment: ₹0</p>
              <a href="#" className="btn btn-sm  btn-outline-primary shadow-none">
                View Details
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4">Payments Over Time</h5>
          <div className="d-flex justify-content-between">
            <div>
              <span className="badge bg-primary me-2">Payments to Date</span>
              <span className="badge bg-secondary">Outstanding Payment</span>
            </div>
          </div>
          <div className="text-center py-5">
            <img
              src="https://www.shutterstock.com/image-vector/document-file-not-found-search-260nw-2172684639.jpg"
              alt="No Trend"
              className="img-fluid"
            />
            <h6 className="mt-3">No Trend to Show</h6>
            <p>There is no sufficient data to show the results in the selected timeframe.</p>
          </div>
        </div>
      </div>
    </div>
    </main>

  );
};

export default PaymentsSeller;
