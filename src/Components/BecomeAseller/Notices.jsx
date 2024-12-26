import React from "react";

function Notices() {
  return (

    <main id="main" className="main">
    <div className="container mt-4">
       <h2 className="fw-bold mb-2">Notices</h2>
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-8 col-md-12 mb-4 ">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Opt-in Tool is NOW OPEN!</h5>
              <p className="card-subtitle text-muted mb-3 fs-small">Nov 14 2024</p>
              <p className="card-text fs-small">
                Follow simple steps to participate.
                <br />
                <b>Click on the Menu</b>
                <br />
                Tap on the <b>Promotions Tab</b>
                <br />
                Click on <b>Participate</b>
                <br />
                List Your Products
                <br />
                Offer irresistible discounts
              </p>
              <p className="text-muted small">
                *All discounts are offered by suppliers at their sole discretion, to the exclusion of Meesho
                <br />
                *T&C Apply
              </p>
              <img
                src="https://images.meesho.com/images/marketing/1732018067007.jpg"
                alt="First Sunday Maha Sale"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Important</h5>
              <p className="card-text text-muted fs-extra-small">
                This is to capture your leave request responses. Your response will help us to update our users on delay
                and subsequently help in managing your pick-ups through our logistic partners. If you're not able to
                operate for certain days due to any reason, we recommend you to opt for a minimum number of days leave;
                long leaves may/will result in throttle down your daily order inflow.
              </p>

              {/* Leave Request Form */}
              <form>
                <div className="mb-3">
                  <label htmlFor="startDate" className="form-label  fs-small">
                    Start Date
                  </label>
                  <input type="date" id="startDate" className="form-control fs-small" />
                </div>
                <div className="mb-3  fs-small">
                  <label htmlFor="endDate" className="form-label  ">
                    End Date
                  </label>
                  <input type="date" id="endDate" className="form-control fs-small" />
                </div>
                <div className="mb-3">
                  <label htmlFor="reason" className="form-label fs-small">
                    Reason for Opting Leave
                  </label>
                  <select id="reason" className="form-select w-100 fs-small shadow-none">
                    <option value="">Select Reason</option>
                    <option value="personal">Personal Reasons</option>
                    <option value="health">Health Issues</option>
                    <option value="vacation">Vacation</option>
                  </select>
                </div>
                <button type="button" className="btn btn-primary w-50 shadow-none">
                  Request For Leave
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Notices;