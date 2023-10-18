
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import InputControl from "./InputControl";
import Home from "./Home";
import { auth,googleProvider} from "../Firebase/Firebase-config";
import styles from './Login.css';
import { Button } from "@material-ui/core";
import Dashboard from "./Dashboard";

function Login() {

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
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
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
          <><><>
              <h1 className="heading">Login</h1> 
              <p className="para"> Sign up to your account</p>
              <Button  className="button"variant="contained"onClick={handleClick}>Sign in with Google</Button>
              </>
              <p className="small">Email Address</p>
            </><InputControl
               
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="Enter email address" />
                 <p className="small">Password</p>
                <InputControl
              
                onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
                placeholder="Enter Password" /><div className="footer">
                <b className={styles.error}>{errorMsg}</b>
                
                <Button onClick={handleSubmission} disabled={submitButtonDisabled} variant="contained" style={{width:"40%", backgroundColor:"#3A9BDC",color:"white",borderRadius:"10px",marginTop:"10px"}}>Login</Button>
        
                <p>
                  Don't have an account?{" "}
                  <span>
                    <Link to="/">Register here</Link>
                  </span>
                </p>
              </div></>
       }
      </div>
    </div>
  </div>
  );
}

export default Login;