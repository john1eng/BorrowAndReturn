import React from "react";
import { useMemo } from "react"
import classes from "./App.module.css";
import { connect, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router";

import Header from "./components/Header/Header"
import Modal from "./components/UI/Modal/Modal";
import BorrowOrDiscard from "./components/Dialog/BorrowOrDiscard";
import ReturnOrDiscard from "./components/Dialog/ReturnOrDiscard";
import Borrows from "./components/Borrow/Borrows";
import Library from "./components/Library/Library";

function App(props) {

  console.log("Render App")

  const showBorrowDialog = useSelector(state => state.book.showBorrowDialog)
  const showReturnDialog = useSelector(state => state.borrow.showReturnDialog)
  
  let route = (
    <Switch>
      <Route path="/borrow" render={(props)=><Borrows {...props} />} />
      <Route path="/library" render={(props)=><Library {...props} />} />
      <Route path="/" exact render={(props)=><Library {...props} />} />
      <Redirect to="/" />
    </Switch>
  )


  let returnModal =  useMemo(()=>{
      return (
        <Modal show={showReturnDialog}>
          <ReturnOrDiscard />
        </Modal>
      )
  },[showReturnDialog])

  let borrowModal = useMemo(()=>{
    return(
      <Modal show={showBorrowDialog}><BorrowOrDiscard /></Modal>
    )
  }, [showBorrowDialog])

  return (
    <div className={classes.App_Container}>
      <Header />
      {route}
      {showBorrowDialog && borrowModal}
      {showReturnDialog && returnModal}
    </div>
  );
}

export default App;
