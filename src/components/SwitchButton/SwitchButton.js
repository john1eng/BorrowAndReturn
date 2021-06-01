import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const borrowObj = { name: "BORROWED", link: "/borrow" };
const libraryObj = { name: "LIBRARY", link: "/library" };

function SwitchButton() {
  const authCtx = useContext(AuthContext);

  const pathname = window.location.pathname;
  const isMatchLibraryPathname = ["/library", "/", "/login"].some(
    (d) => d === pathname
  );
  // console.log(isMatchLibraryPathname);
  const btnProp = isMatchLibraryPathname ? borrowObj : libraryObj;
  
  // const [buttonProp, setButtonProp] = React.useState(btnProp);
  // console.log(buttonProp);

  // const changeBtn = (name) => {
  //   const isMatch = "LIBRARY" === name;
  //   isMatch ? setButtonProp(borrowObj) : setButtonProp(libraryObj);
  // };

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  let button;

  if (authCtx.isLoggedIn) {
    button = (
      <Button
        name={btnProp.name}
        disabled={true}
        link={btnProp.link}
        click={() => forceUpdate()}
      />
    );
  } else {
    button = <Button name="LOGIN" disabled={true} link="/login" />;
  }

  return <div>{button}</div>;
}

export default SwitchButton;
