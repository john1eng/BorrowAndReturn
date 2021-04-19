import React from "react";
import { useMemo, Suspense } from "react"
import classes from "./App.module.css";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router";

import Header from "./components/Header/Header"
import Modal from "./components/UI/Modal/Modal";
import BorrowOrDiscard from "./components/Dialog/BorrowOrDiscard";
import ReturnOrDiscard from "./components/Dialog/ReturnOrDiscard";
import Spinner from "./components/UI/Spinner/Spinner";

function App(props) {

  console.log("Render App")

  const showBorrowDialog = useSelector(state => state.book.showBorrowDialog)
  const showReturnDialog = useSelector(state => state.borrow.showReturnDialog)
  
  const Borrows = React.lazy(()=>{
    return import("./components/Borrow/Borrows")
  })

  const Library = React.lazy(() => {
    return import("./components/Library/Library")
  })

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
      <Suspense fallback={<Spinner />}>
        {route}
      </Suspense>
      {showBorrowDialog && borrowModal}
      {showReturnDialog && returnModal}
    </div>
  );
}

export default App;
