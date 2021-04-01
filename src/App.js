import React from "react";
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


  let route = (
    <Switch>
      <Route path="/borrow" render={(props)=><Borrows {...props} />} />
      <Route path="/library" render={(props)=><Library {...props} />} />
      <Route path="/" exact render={(props)=><Library {...props} />} />
      <Redirect to="/" />
    </Switch>
  )


  
  return (
    <div className={classes.App_Container}>
      <Header />
      <Modal show={props.showBorrowDialog}>
        <BorrowOrDiscard />
      </Modal>
      <Modal show={props.showReturnDialog}>
        <ReturnOrDiscard />
      </Modal>
      {/* <Library />
      <Borrows /> */}
      {route}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showBorrowDialog: state.dialog.showBorrow,
    showReturnDialog: state.dialog.showReturn,
  };
};
export default connect(mapStateToProps)(App);
