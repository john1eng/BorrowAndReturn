import { useRef, useState, useContext } from "react";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";


const Login = () => {
  const authCtx = useContext(AuthContext);
  
  const [signIn, setSignIn] = useState(true);
  let guest = false;

  const passInputRef = useRef();
  const emailInputRef = useRef();

  const SwitchAuthModeHandler = () => {
    setSignIn((prevState) => !prevState);
  };

  const guestHandler = (event) => {
    guest = true;
    loginHandler(event)
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    let enteredEmail = emailInputRef.current.value;
    let enteredPass = passInputRef.current.value;
    
    if(guest){
      enteredEmail = "guest@guest.com";
      enteredPass = "1234567"
    }

    let url;

    if (signIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvBLaelMkggxSEpcwe8PNGd5ZyRUleQ4Y";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvBLaelMkggxSEpcwe8PNGd5ZyRUleQ4Y";
    }

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPass,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className={classes.container}>
        <form className={classes.form}>
          <label htmlFor="email">email</label>
          <input type="text" id="email" required ref={emailInputRef} />
          <label htmlFor="password">password</label>
          <input type="text" id="password" required ref={passInputRef} />
          <div className="buttonContainer">
            <button
              className={[classes.submitBtn, classes.btn].join(" ")}
              onClick={loginHandler}
            >
              submit
            </button>
            {signIn && <button
              className={[classes.guestBtn, classes.btn].join(" ")}
              onClick={guestHandler}
            >
              guest
            </button>}
          </div>
          <button
            type="button"
            className={classes.toggleBtn}
            onClick={SwitchAuthModeHandler}
          >
            {signIn ? "Create new account" : "Login with existing account"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
