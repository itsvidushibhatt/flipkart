import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FIREBASE_DB } from "../../firebaseConfig";

function Returns() {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId]=useState();

  useEffect(() => {
    getUserData(); 
  }, []);


  const getUserData=()=>{
    const response=sessionStorage.getItem('userInfo');
    const data=JSON.parse(response)
     setUserId(data.userId)
     console.log(data)
     fetchReturnOrders(data.userId);
  }

  const fetchReturnOrders=async(uid=userId)=>{
    try{
      const orderDataRef = collection(
        doc(FIREBASE_DB, "returns", uid),
        "returnDetails"
      );

          
      const orderDataSnapshot = await getDocs(orderDataRef); 
      const orderItems = [];

      for (const itemDoc of orderDataSnapshot.docs) {
        const itemData = itemDoc.data();
        console.log(itemDoc.id);
  
        // Fetch customer information based on customerId
        const customerRef = doc(FIREBASE_DB, "customers", itemData.customerId);
        const customerDoc = await getDoc(customerRef);
        const customerData = customerDoc.exists() ? customerDoc.data() : null;
  
        orderItems.push({
          id:itemDoc.id,
          ...itemData,
          customer: customerData,
        });
      }
  
      console.log(orderItems);
      setOrders(orderItems);

    }catch(error){
      console.log(error)
    }
  }

  return (

    <main id="main"  className="main">
    <div className="container mt-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fs-3 fw-bold">Return/RTO Orders</span>
        <div class="search-form mb-3">
         <input type="text" className='form-control  shadow-none' placeholder="Search" />
         </div>
      </div>

      {/* Notification Section */}
      <div className="alert alert-warning d-flex justify-content-between align-items-center">
        <span>
          <strong>Choose your courier partner for customer returns now</strong>
          <br />
          <span className="fs-extra-small">
            Starting 1st Jan 2023, your Customer Returns claims will be
            investigated and approved only by your courier partners.
          </span>
        </span>
        <button className="btn btn-primary fs-small shadow-none">Open Courier Partner</button>
      </div>

      {/* Tabs Section */}
      <ul className="nav nav-tabs fs-6">
        <li className="nav-item">
          <button className="nav-link active">Overview</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Return Tracking</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Claim Tracking</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Courier Partner</button>
        </li>
      </ul>

      {/* Content Section */}
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Summary</h3>
          <select className="form-select form-select-sm fs-small shadow-none w-auto">
            <option>Last 1 Month</option>
            <option>Last 3 Months</option>
          </select>
        </div>

        <h5 className="mt-4">Product Performance</h5>
        {/* <div className="d-flex flex-column align-items-center mt-4">
          <img
            src="https://www.shutterstock.com/image-vector/document-file-not-found-search-260nw-2172684639.jpg"
            alt="No Data Icon"
            className="mb-3"
          />
          <p className="text-muted">No data as of now.</p>
        </div> */}

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
              <th>REASON</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          { orders.map((d,k)=>(
                <tr key={d.id}>
                <td>#{d.orderId}</td>
                <td>Aug 17, 2020, 5:48 (ET)</td>
                <td>{d.customer.name}</td>
                <td><i className="bi bi-credit-card"></i>{d.reason}</td>
                <td><Link to={`/dashboard/OrderDetails/${d.orderId}`} state={{order: d}} ><button className="btn btn-outline-primary shadow-none btn-sm">View</button></Link></td>
               </tr>
              )) 
          } 
  
          </tbody>
          {/* {loading && (
            // <div className="spinner-parent">
               <div className='spinner'></div>
            //  </div>
           )}  */}
        </table>
      </div>

      </div>
    </div>
    </main>
  );
}

export default Returns;
