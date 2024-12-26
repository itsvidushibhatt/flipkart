import React, { useState } from "react";


function MyTickets() {
  const [sortBy, setSortBy]=useState();
  const [issueDate, setIssueDate]=useState();

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setIssueDate(e.target.value);
  };
  return (

    <div className="approvals-container mt-4" >
      <div className="header d-flex justify-content-between align-items-center mb-3">
        <h3>Approvals Overview</h3>
        <select className="form-select form-select-sm fs-small shadow-none" >
          <option value="1">Last 1 Month</option>
          <option value="3">Last 3 Months</option>
          <option value="6">Last 6 Months</option>
        </select>
      </div>

      <ul className="nav nav-tabs mb-4" id="myTab">
        <li className="nav-item">
          <button className="nav-link active">All</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Needs Attention</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">In Progress</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Closed</button>
        </li>
      </ul>

      <div className="filters d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex ">
        <select
            className="form-select form-select-sm shadow-none"
            value={sortBy}
            onChange={handleSortByChange}
          >
            <option value="high-orders">Created Date</option>
            <option value="low-orders">Low Estimated Orders</option>
          </select>
          <select
            className="form-select form-select-sm shadow-none"
            value={issueDate}
            onChange={handleCategoryChange}
          >
            <option >Issue Date</option>
            <option value="low-orders">12-2-2024</option>
            <option value="low-orders">14-3-2024</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search by Sub Order ID or Ticket ID"
          />
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Created On</th>
            <th scope="col">Ticket ID</th>
            <th scope="col">Issue</th>
            <th scope="col">Last Update</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className="text-center">
              <div className="no-results mt-3">
                <img
                  src="https://www.shutterstock.com/image-vector/document-file-not-found-search-260nw-2172684639.jpg"
                  alt="No Results"
                  className="mb-3"
                  style={{height:'100px'}}
                />
                <p>No Results</p>
                <small>Try with another Sub Order ID or Ticket ID</small>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyTickets;
