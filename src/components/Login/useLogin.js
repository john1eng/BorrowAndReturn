import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { addAuth } from "../../API/authApi/addAuth";
import { checkAuth } from "../../API/authApi/checkAuth";

export const useLogin = () => {
  const authCtx = useContext(AuthContext);

  const passInputRef = useRef();
  const emailInputRef = useRef();

  const [signIn, setSignIn] = useState(true);
  let guest = false;

  const SwitchAuthModeHandler = () => {
    setSignIn((prevState) => !prevState);
  };

  const guestHandler = (event) => {
    guest = true;
    loginHandler(event);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    let enteredEmail = emailInputRef.current.value;
    let enteredPass = passInputRef.current.value;

    if (guest) {
      enteredEmail = "guest@guest.com";
      enteredPass = "1234567";
    }

    let response;

    if (signIn) {
      response = checkAuth(enteredEmail, enteredPass);
    } else {
      response = addAuth(enteredEmail, enteredPass);
    }
    response
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
  //   let url;

  //   if (signIn) {
  //     url =
  //       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvBLaelMkggxSEpcwe8PNGd5ZyRUleQ4Y";
  //   } else {
  //     url =
  //       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvBLaelMkggxSEpcwe8PNGd5ZyRUleQ4Y";
  //   }

  //   await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: enteredEmail,
  //       password: enteredPass,
  //       returnSecureToken: true,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         return res.json().then((data) => {
  //           let errorMessage = "Authentication failed!";
  //           throw new Error(errorMessage);
  //         });
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const expirationTime = new Date(
  //         new Date().getTime() + +data.expiresIn * 1000
  //       );
  //       authCtx.login(data.idToken, expirationTime.toISOString());
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });

  return {
    SwitchAuthModeHandler,
    guestHandler,
    loginHandler,
    signIn,
    passInputRef,
    emailInputRef,
  };
};
