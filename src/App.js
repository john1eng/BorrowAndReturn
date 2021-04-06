import React from "react";
import { useMemo } from "react"
import classes from "./App.module.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router";

import Header from "./components/Header/Header"
import Modal from "./components/UI/Modal/Modal";
import BorrowOrDiscard from "./components/Dialog/BorrowOrDiscard";
import ReturnOrDiscard from "./components/Dialog/ReturnOrDiscard";
import Borrows from "./components/Borrow/Borrows";
import Library from "./components/Library/Library";

function App(props) {

  console.log("Render App")

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
        <Modal show={props.showReturnDialog}>
          <ReturnOrDiscard />
        </Modal>
      )
  },[props.showReturnDialog])

  let borrowModal = useMemo(()=>{
    return(
      <Modal show={props.showBorrowDialog}><BorrowOrDiscard /></Modal>
    )
  }, [props.showBorrowDialog])

  return (
    <div className={classes.App_Container}>
      <Header />
      {route}
      {props.showBorrowDialog && borrowModal}
      {props.showReturnDialog && returnModal}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showBorrowDialog: state.book.showBorrowDialog,
    showReturnDialog: state.borrow.showReturnDialog,
  };
};
export default connect(mapStateToProps)(App);
