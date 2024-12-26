import React,{useState} from 'react';
import '../../assets/css/SellerLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebaseConfig';

const LoginSeller = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const loginUser = async () => {
    try {
      let userDoc;
      if (emailOrPhone.includes('@')) {
        const usersRef = collection(firestore, 'users');
        const q = query(usersRef, where('email', '==', emailOrPhone));
          userDoc = await getDocs(q);
      } else {
        const usersRef = collection(firestore, 'users');
        const q = query(usersRef, where('phone', '==', emailOrPhone));
          userDoc = await getDocs(q);
      }
        console.log(userDoc)
      if (!userDoc.empty) {
        const userData = userDoc.docs[0].data();
        const uid=userDoc.docs[0].id;
        const userInfo={'userId':uid, 'email':userData.email}
        console.log(userInfo)

        if (userData.password === password) {
          sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
          alert('Login successful!');
           navigate('/dashboard/dash')
        } else {
          alert('Incorrect password.');
        }
      } else {
        alert('User not found.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Try again.');
    }
  };
  

  return (
    <div className="login-container "  >
      <div className="login-box">
        <h4 className="text-center">Login</h4>
        <div className="form-group mt-5">
          <input
            type="text"
            className="form-control form-control-login "
            placeholder="phone number or email address"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control form-control-login "
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100 mt-3" onClick={loginUser}>
          Next
        </button>
        <div className="text-center mt-3"> 
          <p>Don’t have an account?</p>
          <Link to="/RegisterSeller" className="btn btn-outline-primary shadow-none">
            Register for new account
          </Link>
        </div>
        <p className="text-center mt-3 small">
          By continuing, you agree to Flipkart’s{' '}
          <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
        </p>
        <p className="text-center small">
          Site protected by reCAPTCHA & Google <a href="#">Privacy Policy</a>, <a href="#">Terms</a> apply
        </p>
      </div>
    </div>
  );
};

export default LoginSeller;
