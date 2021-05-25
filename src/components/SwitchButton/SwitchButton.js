import React, { useContext } from 'react'
import Button from "../UI/Button/Button";
import AuthContext from '../../store/auth-context'


function SwitchButton() {

  const authCtx = useContext(AuthContext)

  const borrowObj = {name:'BORROWED', link:'/borrow'} 
  const libraryObj = {name:'LIBRARY', link:'/library'}
  
  const pathname = window.location.pathname;
  const isMatchLibraryPathname = ['/library', '/'].some((d)=> d===pathname);
  
  const btnProp = (isMatchLibraryPathname) ? borrowObj: libraryObj
  const [buttonProp, setButtonProp] = React.useState(btnProp)
  
  
  const changeBtn = (name) =>{
    const isMatch = 'LIBRARY' === name;
    isMatch ? setButtonProp(borrowObj) : setButtonProp(libraryObj)
  }
  
  let button; 

  if(authCtx.isLoggedIn){
    button = <Button name={buttonProp.name} disabled={true} link={buttonProp.link} click={()=>changeBtn(btnProp.name)} /> 
    } else{
      button = <Button name="LOGIN" disabled={true} link="/login"/>
    }

  return (
    <div>
      {button}
    </div>
  )
}

export default SwitchButton
