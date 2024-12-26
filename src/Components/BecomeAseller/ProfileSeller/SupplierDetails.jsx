import React, { useState } from 'react'

export default function SupplierDetails() {
  const [toggle, setToggle]=useState(false)


  return (
    <>
   {toggle ?
   <>  <div className="col-md-9">
          <h4 className='fw-bold'>Supplier Details</h4>
          <form className="mt-4 fs-small">

            <div className="mb-3">
              <label htmlFor="Shop name" className="form-label">Shop Name</label>
                <input
                  type='text'
                  className="form-control fs-small w-50 shadow-none"
                  placeholder="Shop name"
                />
            </div>
            
            <div className="mb-4">
              <label htmlFor="Owner name" className="form-label">Owner Name</label>
                <input
                  type='text'
                  className="form-control fs-small w-50 shadow-none"
                  placeholder="Owner name"
                />
            </div>
            <div className="mb-4">
              <label htmlFor="Owner name" className="form-label">Shop Address</label>
                <input
                  type='text'
                  className="form-control fs-small w-50 shadow-none"
                  placeholder="Address"
                />
            </div>
            <div className="mb-4">
              <label htmlFor="Owner name" className="form-label">Shop Image</label>
                <input
                  type='file'
                  className="form-control fs-small w-50 shadow-none"
                  placeholder="photo"
                />
            </div>

            <button type="button" className="btn btn-primary w-25" onClick={()=>setToggle(!toggle)}>Submit</button>
          </form>
        </div>
      </>
      :
     <>
      <div class="col-md-9">
        <h4 className='fw-bold'>Supplier Details</h4>
        <form className="mt-4 fs-small">
              <div class="card mb-3 pt-3 shadow-none">
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0 fs-small">Shop Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                       SS Sport
                    </div>
                  </div>
                
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Owner Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                       Dipak kumar
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0 fs-small">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      abc@gmail.com
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0 fs-small">Mobile No</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                       +91975863456
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0 fs-small">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      At.post- Hadapsar,Pune,maharashtra-41234
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0 fs-small">Shop Image</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                       <button type="button" className="btn btn-primary fs-small w-25" onClick={()=>setToggle(!toggle)}>Edit</button>
                    </div>
                  </div>
               </div>
              </div>
              </form>
            </div>
             </>
             }
    </>
  )
}
