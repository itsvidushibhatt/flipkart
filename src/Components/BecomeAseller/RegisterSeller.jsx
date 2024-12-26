import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { auth,firestore } from '../../firebaseConfig';
import { FIREBASE_APP } from '../../firebaseConfig';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

export default function RegisterSeller() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [response, setResponse]=useState()
  const [errorMsg, setErrorMsg]=useState('')



  const SendOTP= async()=>{
    try {
        const recaptcha= new RecaptchaVerifier(auth, 'recaptcha', {})
        const confirmation= await signInWithPhoneNumber(auth, phone, recaptcha)
        console.log(confirmation)
        setConfirmationResult(confirmation)
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP.');
    }
  }

  const VerifyOTP=async()=>{
     try{
      if (confirmationResult) {
       const data= await confirmationResult.confirm(otp);
        console.log(data)
        if(data._tokenResponse.isNewUser){
          setResponse(data)
           alert('Mobile Number Verified.')
        }else{alert('Already Register user on this number.')}
        
      } else {
        alert('Please request OTP first.');
      }
     }catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Invalid OTP. Try again.');
    }
  }

  const CreateAccount=async()=>{
          if(!email || !phone || !password){
             setErrorMsg('All fields are required!')
            }else{setErrorMsg('')}
            
             if(!response._tokenResponse.isNewUser){
              return alert('Already Register user on this number.')
             }

             const userData = {
              email,
              phone,
              password,
              // token:response.user.accessToken
            };
            await setDoc(doc(firestore, 'users', response.user.uid), userData);
            alert('Registration successful!');
  }

  return (
     <>
     
     
     <div className="login-container "  >
      <div className="login-box">
        <h4 className="text-center">Register</h4>

        <div class="input-group mt-5">
           <input type="text" class="form-control form-control-login " value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="mobile number" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-primary shadow-none" type="button" id="button-addon2" onClick={SendOTP}>send OTP</button>
        </div>
        
        <div class="input-group mt-3">
        <input
            type="text"
            className="form-control form-control-login  shadow-none"
            placeholder="OTP"
            aria-describedby="button-addon1"
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
          />
         <button class="btn btn-outline-primary shadow-none" type="button" id="button-addon1" onClick={VerifyOTP}>Verify</button>
       </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control form-control-login  shadow-none"
            placeholder="e-mail address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control form-control-login  shadow-none"
            placeholder="set password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className='mt-3' id='recaptcha'> </div>
        <div className='mt-2'>
          <p className='text-danger fs-small'>{errorMsg}</p>
         </div>

        <button className="btn btn-primary w-100 mt-3" onClick={CreateAccount}>
          Create Account
        </button>
        <div className="text-center mt-3">
          <p>already have an account?</p>
          <Link to="/LoginSeller" className="btn btn-outline-primary w-50 shadow-none">
            Login
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
     
     
     </>
  )
}
