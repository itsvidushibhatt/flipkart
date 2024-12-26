import React from 'react';

const SupplierESignature = () => {
  return (

    <div className="col-md-9">
    {/* <div className="container"> */}
      <div className="card shadow-none">
        <h4 className="h4 mb-3 fw-bold">Supplier E-Signature</h4>
        <p className="text-muted fs-extra-small">
          Your e-signature will be recorded for issuing invoices/credit notes to customers
        </p>

        {/* Full Legal Name Input */}
        <div className="mb-4">
          <label htmlFor="legalName" className="form-label">
            Full Legal Name
          </label>
          <input
            type="text"
            className="form-control w-50"
            id="legalName"
            placeholder="Guest"
            disabled
          />
        </div>

        {/* Generated E-Signature Section */}
        <div className="card bg-light p-3 mb-4 w-50">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-1 fw-bold">Generated E-Signature</p>
            </div>
            <i
              className="bi bi-info-circle text-muted"
              title="Your generated e-signature will be used."
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          <hr className="my-2" />
          <div className="d-flex justify-content-between align-items-center fs-extra-small">
            <p className="mb-0 ">Want to change the signature?</p>
            <button className="btn btn-link text-decoration-none fs-extra-small">
              Change <i class='bx bx-edit-alt' ></i>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button className="btn btn-primary btn-lg w-50 fs-small">Submit Signature</button>
        </div>
      </div>
    {/* </div> */}
    </div>
  );
};

export default SupplierESignature;
