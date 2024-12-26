import React from 'react'

export default function Help() {
  return (
    <>
      
          {/* Search */}
    <div className="d-flex justify-content-between align-items-center my-4">
        <h5>Select Issue Category</h5>
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Issue or Question"
        />
      </div>

      {/* Categories */}
      <div className="row gy-4"> 
        {/* Returns/RTO & Exchange */}
        <div className="col-lg-4">
          <div className="card border rounded-3 shadow-none">
            <div className="card-body">
              <h6 className="card-title d-flex align-items-center fw-bold">
              <i class='bx bx-undo fw-bold fs-3 me-2 text-primary'></i>Returns/RTO & Exchange
              </h6>
              <ul className="list-unstyled mt-3 fs-small">
                <li>I have received wrong return</li>
                <div className="grey-line mb-2"></div>
                <li>I have received damaged return</li>
                <div className="grey-line mb-2"></div>
                <li>I have not received my Return/RTO shipment</li>
                <div className="grey-line mb-2"></div>
                <li className="text-primary fw-bold">View All</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cataloging & Pricing */}
        <div className="col-lg-4">
           <div className="card border rounded-3 shadow-none">
            <div className="card-body">
              <h6 className="card-title d-flex align-items-center fw-bold">
              <i class='bx bx-undo fw-bold fs-3 me-2 text-primary'></i>Cataloging & Pricing
              </h6>
              <ul className="list-unstyled mt-3 fs-small">
                <li>My uploaded file is not live yet</li>
                <div className="grey-line mb-2"></div>
                <li>I want to edit catalog details</li>
                <div className="grey-line mb-2"></div>
                <li>I want catalog upload training</li>
                <div className="grey-line mb-2"></div>
                <li className="text-primary fw-bold">View All</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Orders & Delivery */}
        <div className="col-lg-4">
          <div className="card border rounded-3 shadow-none">
            <div className="card-body">
              <h6 className="card-title d-flex align-items-center fw-bold">
              <i class='bx bx-undo fw-bold fs-3 me-2 text-primary'></i>Orders & Delivery
              </h6>
              <ul className="list-unstyled mt-3 fs-small">
              <li>My orders are not picked up yet</li>
                <div className="grey-line mb-2"></div>
                <li>I want to edit catalog details</li>
                <div className="grey-line mb-2"></div>
                <li>I want catalog upload training</li>
                <div className="grey-line mb-2"></div>
                <li className="text-primary fw-bold">View All</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Categories */}
        {[{name:"Payments",icon:'bx bxs-wallet-alt'}, {name:"Advertisements",icon:'bx bxs-bell'}, {name:"Inventory"}, {name:"Account", icon:'bx bxs-user'}, {name:"Others"}]
        .map(
          (category, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card border rounded-3 shadow-none">
                <div className="card-body d-flex align-items-center">
                  <h6 className="card-title fw-bold mb-0">
                    <i className={`${category.icon} text-primary me-2`} ></i> {category.name}
                  </h6>
                </div>
              </div>
            </div>
          )
        )}
      </div>

    </>
  )
}
