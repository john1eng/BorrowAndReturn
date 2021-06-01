import { useLogin } from "./useLogin"
import classes from "./Login.module.css";



const Login = () => {

  const {SwitchAuthModeHandler, guestHandler, loginHandler, signIn, passInputRef, emailInputRef} = useLogin();

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
