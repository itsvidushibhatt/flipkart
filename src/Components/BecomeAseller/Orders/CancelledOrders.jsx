import React from 'react'

export default function CancelledOrders() {
    let status='pending'
  return (
    <>
      
      <div className="order-table mt-4">
      <div class="search-form mb-3">
         <input type="text" className='form-control form-control-sm shadow-none w-25' placeholder="Search" />
         </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ORDER</th>
              <th>DATE</th>
              <th>CUSTOMER</th>
              <th>PAYMENT STATUS</th>
              <th>FULFILLMENT STATUS</th>
              <th>PAYMENT METHOD</th>
              <th>TOTAL</th>
              <th>ACTIONS</th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <td>#35463</td>
              <td>Aug 17, 2020, 5:48 (ET)</td>
              <td>Jase Marley</td>
              <td><span className={`${status}=== pending ? badge bg-danger : badge bg-success`}>Pending</span></td>
              <td><span className="badge bg-info">unFulfilled</span></td>
              <td><i className="bi bi-credit-card"></i> Cash On</td>
              <td>256.39</td>
              <td><button className="btn btn-outline-primary shadow-none btn-sm">View</button></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

    </>
  )
}
