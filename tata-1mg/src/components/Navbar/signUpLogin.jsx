import * as React from "react";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./signUpLogin.css";

export function SignUpLogin() {
  const [popup, setPopup] = useState(false);
  const [popLogin, setPopLogin] = useState(false);
  const [signUpBox, setSignBox] = useState(false);

  const handleLogin = () => {
    setPopLogin(!popLogin);
  };
  const closeLogin = () => {
    setPopLogin(false);
  };

  const handleSignUp = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div>
      <span onClick={handleLogin} style={{position:"relative",left:"-10px"}}>Login</span>
      <span onClick={handleSignUp}>Sign Up</span>

      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <p onClick={closePopup}>
                  <CloseIcon style={{ fontSize: 15 }} />
                </p>
              </div>
              <div className="main-box">
                <div className="pop-box1">
                  <img
                    src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
                    alt=""
                  />
                  <h3>Make Healthcare simpler</h3>
                  <p>
                    Order any medicine or health product and we’ll deliver it
                    for free. Enjoy discounts on everything.
                  </p>
                </div>
                <div className="box2">
                  <h2>Sign Up</h2>
                  <p className="otp">
                    Please enter your Mobile number to receive One Time Password
                    (OTP)
                  </p>

                  {signUpBox ? (
                    <div>
                      <TextField
                        className="textfield"
                        style={{
                          borderBottom: "3px solid #ff6f61",
                          color: "red",
                        }}
                        InputProps={{ disableUnderline: true, color: "red" }}
                        id="standard-basic"
                        label="Enter OTP"
                        variant="standard"
                        margin="normal"
                        fullWidth
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{
                              color: "#ff6f61",
                              margin: "15px 0px",
                            }}
                          />
                        }
                        label="Are you a healthcare professional?"
                      />
                      <button className="btn" onClick={closePopup}>
                        Confirm Your OTP
                      </button>
                    </div>
                  ) : (
                    <div>
                      <TextField
                        className="textfield"
                        style={{
                          borderBottom: "3px solid #ff6f61",
                          color: "red",
                        }}
                        InputProps={{ disableUnderline: true, color: "red" }}
                        id="standard-basic"
                        label="Enter Mobile Number"
                        variant="standard"
                        margin="normal"
                        fullWidth
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{
                              color: "#ff6f61",
                              margin: "15px 0px",
                            }}
                          />
                        }
                        label="Confirm Your OTP"
                      />
                      <button
                        className="btn"
                        onClick={() => {
                          setSignBox(!signUpBox);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  <div className="bottom">
                    <p>
                      Have an account? <strong className="click">Login</strong>
                    </p>
                    <p>
                      For corporate Sign up,{" "}
                      <strong className="click"> Click Here</strong>
                    </p>
                    <p className="small-txt">By signing up, you agree to our</p>
                    <p className="small-txt">
                      Terms and Conditions & Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* ----------------------- */}
      <div>
        {popLogin ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <p onClick={closeLogin}>
                  <CloseIcon style={{ fontSize: 15 }} />
                </p>
              </div>
              <div className="main-box">
                <div className="pop-box1">
                  <img
                    src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
                    alt=""
                  />
                  <h3>Make Healthcare simpler</h3>
                  <p>
                    Order any medicine or health product and we’ll deliver it
                    for free. Enjoy discounts on everything.
                  </p>
                </div>
                <div className="box2">
                  <h2>LogIn</h2>
                  <p className="otp">
                    Get access to your orders, lab tests & doctor consultations
                  </p>

                  {signUpBox ? (
                    <div>
                      <TextField
                        className="textfield"
                        style={{
                          borderBottom: "3px solid #ff6f61",
                          color: "red",
                        }}
                        InputProps={{ disableUnderline: true, color: "red" }}
                        id="standard-basic"
                        label="Enter Your OTP"
                        variant="standard"
                        margin="normal"
                        fullWidth
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{
                              color: "#ff6f61",
                              margin: "15px 0px",
                            }}
                          />
                        }
                        label="Confirm Your OTP"
                      />
                      <button className="btn" onClick={closeLogin}>
                        Confirm OTP
                      </button>
                    </div>
                  ) : (
                    <div>
                      <TextField
                        className="textfield"
                        style={{
                          borderBottom: "3px solid #ff6f61",
                          color: "red",
                        }}
                        InputProps={{ disableUnderline: true, color: "red" }}
                        id="standard-basic"
                        label="Enter Your Mobile or Password"
                        variant="standard"
                        margin="normal"
                        fullWidth
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{
                              color: "#ff6f61",
                              margin: "15px 0px",
                            }}
                          />
                        }
                        label="Confirm Email or Mobile Number"
                      />
                      <button
                        className="btn"
                        onClick={() => {
                          setSignBox(!signUpBox);
                        }}
                      >
                        Login
                      </button>
                    </div>
                  )}

                  <div className="bottom">
                    <p>
                      New in 1mg? <strong className="click">Sign Up</strong>
                    </p>
                    <p>
                      Have a corporate account? ,{" "}
                      <strong className="click"> Click Here</strong>
                    </p>
                    <p className="small-txt">By logging in, you agree to our</p>
                    <p className="small-txt">
                      Terms and Conditions & Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
