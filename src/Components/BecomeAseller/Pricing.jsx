// src/components/Pricing.js
import React, { useState } from "react";
import '../../assets/css/Pricing.css'

const Pricing = () => {
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <main id="main"  className="main">
    <div className="container mt-4">
      {/* Header */}
      <div className="pricing-header d-flex justify-content-between align-items-center">
        <h2>Pricing</h2>
        <button className="btn btn-primary">Know More</button>
      </div>

      {/* Overview Section */}
      <div className="overview mt-4 p-3 shadow-sm rounded">
        <div className="row">
          <div className="col-md-5 border rounded-3 p-3">
            <div className="price-health">
              <h6 className="fw-bold">Price Health</h6>
              <div className="d-flex align-items-center">
                <div className="circle-chart"></div>
                <div className="d-flex justify-content-between">
                   <ul className="list-unstyled ms-3 fs-small">
                    <span className="fs-extra-small mb-1">Insigths</span>
                     <li>Losing Orders</li>
                     <li>Losing Views</li>
                     <li>Best Priced</li>
                   </ul>
                   <ul className="list-unstyled ms-5 text-end fs-small">
                    <span className="fs-extra-small mb-1">product</span>
                     <li> 0</li>
                     <li> 0</li>
                     <li> 0</li>
                   </ul>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-5 ms-4 border rounded-3  p-3">
            <div className="d-flex justify-content-between">
             <h6 className="fw-bold">Growth </h6>
             <p className="fs-small">Last 30 Days</p>
            </div>
            <div className="growth-stats d-flex justify-content-between fs-small mt-2">
              <div className="">
                <p>Price Updates</p>
                <p>0</p>
              </div>
              <div className="border-start px-5">
                <p>Orders</p>
                <p>0</p>
              </div>
              <div className="border-start px-5">
                <p>Sales</p>
                <p>0</p>
              </div>
             </div>
              <small className="text-muted fs-extra-small mt-2">
                43,964 suppliers got -4% order growth in 30 days after reducing prices
              </small>
            
          </div>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="d-flex justify-content-between mt-4">
        <div>
          <select
            className="form-select form-select-sm shadow-none "
            value={category}
            onChange={handleCategoryChange}
          >
            <option >Filter by Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
          </select>
        </div>
        <div>
          <select
            className="form-select form-select-sm shadow-none"
            value={sortBy}
            onChange={handleSortByChange}
          >
            <option value="high-orders">High Estimated Orders</option>
            <option value="low-orders">Low Estimated Orders</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section mt-4">
        <p>No products to display</p>
      </div>
    </div>
    </main>
  );
};

export default Pricing;
