import React, { useState } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';
import { signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth, firestore } from '../../firebaseConfig';
import { saveInLocalStorage } from '../../helpers/saveInLocalStorage';
import { collection, query, where, getDocs,  doc, setDoc, limit } from "firebase/firestore"; 


const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const Image = styled(Box)`
    background: #2874f0 url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png") 
    center 85% 
    no-repeat;
    width: 40%;
    height: 100%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600;
    }
`;

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
};

const LoginDialog = ({ open, setOpen, setAccount }) => {
    const [input, setInput] = useState({ firstName: "", lastName: "", username: "", email: "", mobileNo: "" , role: "user"});
    const [showError, setShowError] = useState(false);
    const [isLoginScreen, setIsLoginScreen] = useState(true);
    const [otpSent, setOtpSent] = useState(false);
    const [verificationId, setVerificationId] = useState(null);
    const [otp, setOtp] = useState('');
    const [userRef, setUserRef] = useState(null);

    const toggleAccount = () => setIsLoginScreen(!isLoginScreen);
    const handleClose = () => setOpen(false);

    const onInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSendOtp = async (event) => {
        console.log('hi')
        event.preventDefault();
        if (!input.mobileNo) {
            setShowError(true);
            return;
        }
        try {
            const mobileNo = input.mobileNo;
            const usersRef = collection(firestore, "users");

            
            const q = query(usersRef, where("mobileNo", "==", mobileNo), where("role", "==", "user"), limit(1));
            const usersSnapshot = await getDocs(q);
             
           
            if (isLoginScreen && usersSnapshot.empty) {
            setShowError(true); // User not found
            return;
            }

            if (!isLoginScreen && !usersSnapshot.empty) {
            setShowError(true); // User already registered
            return;
            }

            setUserRef(usersRef);
            setOtpSent(true);

            const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                callback: (response) => {
                    console.log("");
                }
            });

            const confirmationResult = await signInWithPhoneNumber(auth, input.mobileNo, appVerifier);
            setVerificationId(confirmationResult.verificationId);
            setShowError(false);
        } catch (error) {
            setShowError(true);
            console.error("Error sending OTP:", error.message);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp || !verificationId) {
            setShowError(true);
            return;
        }
    
        const credential = PhoneAuthProvider.credential(verificationId, otp);
        try {
            const userCredential = await signInWithCredential(auth, credential);
            const uid = userCredential.user.uid;
    
            if (isLoginScreen) {
                setOpen(false);
                const userDoc = userRef.docs[0];
                if (!userDoc || userDoc.id !== uid) {
                    setShowError(true); // User mismatch error
                    return;
                }
                await saveInLocalStorage("userInfo", userDoc.data());
                setAccount(userDoc.data().username);
            } else {
                // Create a reference to the user document
                const userDocRef = doc(firestore, "users", uid);
                // Set the user data
                await setDoc(userDocRef, input);
                await saveInLocalStorage("userInfo", input); // Save the input data
                setOpen(false);
                setAccount(input.username);
            }
        } catch (error) {
            setShowError(true);
            console.error("Error verifying OTP:", error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{isLoginScreen ? accountInitialValues.login.heading : accountInitialValues.signup.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>
                            {isLoginScreen ? accountInitialValues.login.subHeading : accountInitialValues.signup.subHeading}
                        </Typography>
                    </Image>
                    <Wrapper>
                        {isLoginScreen ? (
                            <>
                                <div id="recaptcha-container"></div>
                                <TextField variant="standard" onChange={onInputChange} name="mobileNo" label="Enter Phone Number" value={input.mobileNo}/>
                                {showError && <Error>{userRef ? "User not found. Please sign up." : "Invalid phone number or OTP"}</Error>}
                                <Text>By continuing, you agree to our Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={handleSendOtp}>Send OTP</LoginButton>
                                <CreateAccount onClick={toggleAccount}>New to Flipkart? Create an account</CreateAccount>
                            </>
                        ) : (
                            <>
                                <TextField variant="standard" onChange={onInputChange} name="firstName" label="Enter Firstname" value={input.firstName}/>
                                <TextField variant="standard" onChange={onInputChange} name="lastName" label="Enter Lastname" value={input.lastName}/>
                                <TextField variant="standard" onChange={onInputChange} name="username" label="Enter Username" value={input.username}/>
                                <TextField variant="standard" onChange={onInputChange} name="email" label="Enter Email" value={input.email}/>
                                <TextField variant="standard" onChange={onInputChange} name="mobileNo" label="Enter Phone" value={input.mobileNo}/>
                                {showError && <Error>Could not create account, please try again or mobile number already in use.</Error>}
                                <LoginButton onClick={handleSendOtp}>Send OTP</LoginButton>
                                <CreateAccount onClick={toggleAccount}>Already on MitKart? Login</CreateAccount>
                            </>
                        )}
                        {otpSent && (
                            <Box>
                                <TextField
                                    variant="standard"
                                    label="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <Button onClick={handleVerifyOtp} style={{ marginTop: '20px' }}>Verify OTP</Button>
                            </Box>
                        )}
                    </Wrapper>
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
