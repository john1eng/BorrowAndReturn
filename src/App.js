import React from "react";
import { useMemo, Suspense, useEffect, useContext} from "react"
import classes from "./App.module.css";
import { useSelector} from "react-redux";
import { Switch, Route, Redirect } from "react-router";

import Header from "./components/Header/Header"
import Modal from "./components/UI/Modal/Modal";
import BorrowOrDiscard from "./components/Dialog/BorrowOrDiscard";
import ReturnOrDiscard from "./components/Dialog/ReturnOrDiscard";
import Spinner from "./components/UI/Spinner/Spinner";
import {updateBooks} from "./API/bookAPI/updateBooks"
import { updateBorrowed } from "./API/borrowAPI/updateBorrowed";
import { useFetch } from "./useFetch";
import Login from "./components/Login/Login";
import AuthContext from './store/auth-context'


let isInitial = true;

function App(props) {

  const {books, borrowed, fetchBooksHandler, fetchBorrowedHandler} = useFetch();
  const authCtx = useContext(AuthContext)

  useEffect(() => {
    fetchBooksHandler();
    fetchBorrowedHandler();
  },[fetchBooksHandler, fetchBorrowedHandler])
  
  useEffect(()=>{
    if(isInitial){
      isInitial = false;
      return;
    }
    updateBorrowed(borrowed)
    updateBooks(books);

  },[books, borrowed])

  console.log("Render App")

  const showBorrowDialog = useSelector(state => state.dialog.showBorrowDialog)
  const showReturnDialog = useSelector(state => state.dialog.showReturnDialog)
  
  const Borrows = React.lazy(()=>{
    return import("./components/Borrow/Borrows")
  })

  const Library = React.lazy(() => {
    return import("./components/Library/Library")
  })

  console.log(authCtx.isLoggedIn);

  let route = (
      <Switch>
        <Route path="/login">
          {!authCtx.isLoggedIn && (<Route path="/login" render={(props)=><Login {...props} />}/>)}
          {authCtx.isLoggedIn && <Redirect to="/library" />}
        </Route> 
        {authCtx.isLoggedIn && (<Route path="/borrow" render={(props)=><Borrows {...props} />} />)}
        {authCtx.isLoggedIn && (<Route path="/library" render={(props)=><Library {...props} />} />)}
        {authCtx.isLoggedIn && (<Route path="/" exact render={(props)=><Library {...props} />} />)}
        <Redirect to="/login" />
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
      {authCtx.isLoggedIn && <div className={classes.logoutBtn} onClick={authCtx.logout}>logout</div>}
      <div style={{marginTop: '4rem'}}></div>
      <Suspense fallback={<Spinner />}>
        {route}
      </Suspense>
      {showBorrowDialog && borrowModal}
      {showReturnDialog && returnModal}
    </div>
  );
}

export default App;
