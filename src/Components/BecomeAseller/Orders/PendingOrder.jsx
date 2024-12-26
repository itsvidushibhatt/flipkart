import { collection, getDocs,doc, getDoc, where, query } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../firebaseConfig';
import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function PendingOrder() { 
    let status='pending'
    const [orders, setOrders] = useState([]);
    const [userId, setUserId]=useState();

    const navigate=useNavigate();

    useEffect(() => {
      getUserData();
    }, []);


    const getUserData=()=>{
      const response=sessionStorage.getItem('userInfo');
      const data=JSON.parse(response)
       setUserId(data.userId)
       console.log(data)
       fetchOrders(data.userId);
    }

    const fetchOrders = async (uid=userId) => {
      try {
        // Reference to the orderData subcollection
        const orderDataRef = collection(
          doc(FIREBASE_DB, "orders", uid),
          "orderData"
        );
        const q = query(orderDataRef, where("status", "==", 'pending'));
        const orderDataSnapshot = await getDocs(q); 
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
      } catch (error) {
        console.error("Error fetching orders: ", error);
      } 
    };

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
          {orders.map((d,k)=>(
              <tr>
              <td>#{d.orderId}</td>
              <td>Aug 17, 2020, 5:48 (ET)</td>
              <td>{d.customer.name}</td>
              <td><span className={`${status}== pending ? badge bg-danger : badge bg-success`}>{d.status}</span></td>
              <td><span className="badge bg-info">UnFulfilled</span></td>
              <td><i className="bi bi-credit-card"></i> Cash On</td>
              <td>{d.totalAmount}</td>
              <td><button className="btn btn-outline-primary shadow-none btn-sm">View</button></td>
            </tr>
           )) 
          }

          </tbody>
        </table>
      </div>

    </>
  )
}
