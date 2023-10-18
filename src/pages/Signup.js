import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import InputControl from "./InputControl";
import { auth,googleProvider } from "../Firebase/Firebase-config";
import {signInWithPopup} from 'firebase/auth';
import Dashboard from "./Dashboard";
import styles from "./Signup.css";
import { Button } from "@material-ui/core";



function Signup() {

  const [value,setValue] = useState('');
  const handleClick =()=>{
      signInWithPopup(auth,googleProvider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
      })
  }

  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/Dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
  <div className="container">
    <div className="innerbox">
      <div>

        {value?<Dashboard/>:
        
          <><><h1 className="heading">Sign Up</h1>
              <p className="para"> Sign up to your account</p>
              <Button  className="button"variant="contained"onClick={handleClick}>Sign up with Google</Button>
              </>
              <p className="small">Name</p>
              <InputControl
          
                placeholder="Enter your name"
                onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
                <p className="small">Email Address</p>
                
        <InputControl
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <p className="small">Password</p>
        <InputControl 
          
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
        
          <Button className="bb" onClick={handleSubmission} disabled={submitButtonDisabled} variant="contained" style={{width:"40%", backgroundColor:"#3A9BDC",color:"white",borderRadius:"10px",marginTop:"10px"}}>Signup</Button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/Home1">Login</Link>
            </span>
          </p>
        </div>
     
                </>
        }




      </div>
  
      
      
     
    </div>
  </div>
  );
}

export default Signup;