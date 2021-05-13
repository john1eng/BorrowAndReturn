import React from "react";
import { useMemo, Suspense, useEffect, useCallback } from "react"
import classes from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router";

import Header from "./components/Header/Header"
import Modal from "./components/UI/Modal/Modal";
import BorrowOrDiscard from "./components/Dialog/BorrowOrDiscard";
import ReturnOrDiscard from "./components/Dialog/ReturnOrDiscard";
import Spinner from "./components/UI/Spinner/Spinner";
import {updateBooks} from "./API/bookAPI/updateBooks"
import * as actionCreatorBook from './store/actions/book'
import * as actionCreatorBorrow from './store/actions/borrow'
import { fetchBooks } from './API/bookAPI/fetchBooks';
import { fetchBorrowed } from "./API/borrowAPI/fetchBorrowed"
import { updateBorrowed } from "./API/borrowAPI/updateBorrowed";

let isInitial = true;

function App(props) {

  const books = useSelector(state => state.book.books);
  const borrowed = useSelector(state => state.borrow.borrowed);

  const dispatch = useDispatch();
  const onFetchBooks = (books) =>
    dispatch(actionCreatorBook.fetchBooks(books));

  const onFetchBorrowed = (borrowed) => 
    dispatch(actionCreatorBorrow.fetchBorrowed(borrowed))

  const fetchBooksHandler = useCallback(async() => {
    const loadedBooks = await fetchBooks();
    await onFetchBooks(loadedBooks);
  },[]);

  const fetchBorrowedHandler = useCallback(async() => {
    const loadedBorrowed = await fetchBorrowed();
    onFetchBorrowed(loadedBorrowed)
  },[])

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
  // const dispatch = useDispatch();
  // const onFetchBooks = (books) =>
  // dispatch(actionCreator.fetchBooks(books));
  // useEffect(() => {
  //   updateBooks(books)

  // }, [])

  // useEffect(()=>{
  //   if(isInitial){
  //     isInitial = false;
  //     return;
  //   }
  // },[])

  console.log("Render App")

  const showBorrowDialog = useSelector(state => state.dialog.showBorrowDialog)
  const showReturnDialog = useSelector(state => state.dialog.showReturnDialog)
  
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
