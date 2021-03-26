import React from 'react'
import SwitchButton from '../SwitchButton/SwitchButton'
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.Header} >
      <h1 className={classes.Title}>Borrow & Return</h1>
      <div className={classes.Button_Container}>
        <SwitchButton />
      </div>
    </div>
  )
}

export default Header
