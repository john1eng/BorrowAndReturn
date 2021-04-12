import React from 'react'
import Button from "../UI/Button/Button";


function SwitchButton() {

  const pathname = window.location.pathname;
  const isMatchLibraryPathname = ['/library', '/'].some((d)=> d===pathname);
  const btnProp = (isMatchLibraryPathname) ? {name:'BORROWED', link:'/borrow'} : {name:'LIBRARY', link:'/library'}
  const [buttonProp, setButtonProp] = React.useState(btnProp)
  
  const changeBtn = (name) =>{
    const isMatch = 'LIBRARY' === name;
    isMatch ? setButtonProp({name:'BORROWED', link:'/borrow'}) : setButtonProp({name:'LIBRARY', link:'/library'})
  }
  const button = <Button name={buttonProp.name} disabled={true} link={buttonProp.link} click={()=>changeBtn(btnProp.name)} /> 
  
  return (
    <div>
      {button}
    </div>
  )
}

export default SwitchButton
