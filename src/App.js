
import { BrowserRouter as  Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import { Box } from '@mui/material'

//components
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import Cart from './Components/Cart/Cart';
import BecomeSellerHomePage from './Components/BecomeAseller/BecomeSellerHomePage';
import { useEffect, useState } from 'react';
import RegisterSeller from './Components/BecomeAseller/RegisterSeller';
import LoginSeller from './Components/BecomeAseller/LoginSeller';
import Sidebar_Navbar from './Components/BecomeAseller/Sidebar_Navbar';
import ProductType from './Components/BecomeAseller/ProductType';
import ListProduct from './Components/BecomeAseller/ListProduct';
import OrdersHome from './Components/BecomeAseller/Orders/OrdersHome';
import AllOrders from './Components/BecomeAseller/Orders/AllOrders';
import PendingOrder from './Components/BecomeAseller/Orders/PendingOrder';
import OrderDetailsSeller from './Components/BecomeAseller/Orders/OrderDetailsSeller';
import Dashboard from './Components/BecomeAseller/Dashboard/Dashboard';
import DeliverdOrders from './Components/BecomeAseller/Orders/DeliverdOrders';
import CancelledOrders from './Components/BecomeAseller/Orders/CancelledOrders';
import Pricing from './Components/BecomeAseller/Pricing';
import PaymentsSeller from './Components/BecomeAseller/PaymentsSeller';
import Returns from './Components/BecomeAseller/Returns';

import MyTickets from './Components/BecomeAseller/Support/MyTickets';
import Help from './Components/BecomeAseller/Support/Help';
import Support from './Components/BecomeAseller/Support/Support';
import Notices from './Components/BecomeAseller/Notices';
import Setting from './Components/BecomeAseller/Setting/Setting';
import ChangePassword from './Components/BecomeAseller/Setting/ChangePassword';
import SupplierESignature from './Components/BecomeAseller/Setting/SupplierESignature';
import EmailNotification from './Components/BecomeAseller/Setting/EmailNotification';
import ProfileSeller from './Components/BecomeAseller/ProfileSeller/ProfileSeller';
import SupplierDetails from './Components/BecomeAseller/ProfileSeller/SupplierDetails';
import TaxDetails from './Components/BecomeAseller/ProfileSeller/TaxDetails';
import BankDetails from './Components/BecomeAseller/ProfileSeller/BankDetails';
import PickupAddress from './Components/BecomeAseller/ProfileSeller/PickupAddress';

function App() { 
   const location= useLocation();
 
   useEffect(()=>{
     if(location.pathname==='/' ){
     localStorage.removeItem('role')
     } 
   },[])
   
   const userRole=localStorage.getItem('role')
  if(userRole==='seller'){  
    return ( 
       <Routes>
         <Route path='/BecomeASellerHome' element={<BecomeSellerHomePage/>}></Route>
          <Route path='/LoginSeller' element={<LoginSeller/>}/>
          <Route path='/RegisterSeller'  element={<RegisterSeller/>}/>
          <Route path='/dashboard' element={<Sidebar_Navbar/>}>
            <Route path='dash' element={<Dashboard/>}/>
            <Route path='productType' element={<ProductType/>}/>
            <Route path='listProduct' element={<ListProduct/>}/>
            <Route path='pricing'  element={<Pricing/>}/>
            <Route path='paymentsSeller' element={<PaymentsSeller/>}/>
            <Route path='return' element={<Returns/>}/>
            <Route path='notice' element={<Notices/>}/>
            <Route path='OrdersSeller' element={<OrdersHome/>}>
              <Route path='AllOrders'  element={<AllOrders/>}/>
              <Route path='PendingOrder' element={<PendingOrder/>}/>
              <Route path='DeliverdOrder' element={<DeliverdOrders/>}/>
              <Route path='CancelledOrder' element={<CancelledOrders/>}/>
            </Route>
            <Route path='support' element={<Support/>}>
              <Route path='help' element={<Help/>}/>
              <Route path='myTicket'   element={<MyTickets/>}/>
            </Route>
            <Route path='OrderDetails/:id' element={<OrderDetailsSeller />} />
            <Route path='profileSeller' element={<ProfileSeller/>}>
              <Route path='supplierDeatils' element={<SupplierDetails/>}/>
              <Route path='taxDetails'  element={<TaxDetails/>}/>
              <Route path='bankDeatils' element={<BankDetails/>}/>
              <Route path='pickupAddress' element={<PickupAddress/>}/>
            </Route>
            <Route path='setting' element={<Setting/>}>
              <Route path='changePass' element={<ChangePassword/>}/>
              <Route path='supplierESignature' element={<SupplierESignature/>}/>
              <Route path='emailNotification' element={<EmailNotification/>}/>
            </Route>
          </Route>
          
       </Routes>
    )
  }
 
  return (
    <> 
    
      
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
          </Box>

       
   
</>
  );
}

export default App;
