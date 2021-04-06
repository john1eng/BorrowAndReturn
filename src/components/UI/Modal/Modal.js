import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = React.memo(({show, children}) => {
  console.log("render Model")
  return (
    <>
    <Backdrop show={show}/>
    <div
        className={classes.Modal}
        style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
        }}
    >
    {children}
    </div>
    </>
  )
});

export default Modal