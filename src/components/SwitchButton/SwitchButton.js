import React from 'react'
import Button from "../UI/Button/Button";



function SwitchButton() {
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
  
  const button = <Button name={buttonProp.name} disabled={true} link={buttonProp.link} click={()=>changeBtn(btnProp.name)} /> 
  
  return (
    <>
      {button}
    </>
  )
}

export default SwitchButton
