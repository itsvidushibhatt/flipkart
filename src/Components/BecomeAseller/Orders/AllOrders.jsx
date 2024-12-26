import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FIREBASE_DB } from '../../../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
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
        const orderDataRef = collection(
          doc(FIREBASE_DB, "orders", uid),
          "orderData"
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
      } catch (error) {
        console.error("Error fetching orders: ", error);
      } finally {
        setLoading(false);
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
          { orders.map((d,k)=>(
                <tr key={d.id}>
                <td>#{d.orderId}</td>
                <td>Aug 17, 2020, 5:48 (ET)</td>
                <td>{d.customer.name}</td>
                <td><span className={`${d?.paymentDetails?.paymentStatus}=== paid ? badge bg-success : badge bg-danger`}>{d?.paymentDetails?.paymentStatus}</span></td>
                <td><span className="badge bg-info">Fulfilled</span></td>
                <td><i className="bi bi-credit-card"></i>{d?.paymentDetails?.paymentMethod}</td>
                <td>{d.totalAmount}</td>
                <td><Link to={`/dashboard/OrderDetails/${d.orderId}`}  state={{ order: d }}><button className="btn btn-outline-primary shadow-none btn-sm">View</button></Link></td>
               </tr>
             )) 
          }

          </tbody>
          {loading && (
            // <div className="spinner-parent">
               <div className='spinner'></div>
            //  </div>
           )} 
        </table>
      </div>
    </>
  )
}
