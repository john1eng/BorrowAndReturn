  import { useCallback } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import * as actionCreatorBook from './store/actions/book';
  import * as actionCreatorBorrow from './store/actions/borrow';
  import { fetchBooks } from './API/bookAPI/fetchBooks';
  import { fetchBorrowed } from "./API/borrowAPI/fetchBorrowed" 
  
  export const useFetch = () => {

    const books = useSelector(state => state.book.books);
    const borrowed = useSelector(state => state.borrow.borrowed);
  
    const dispatch = useDispatch();
    const onFetchBooks = useCallback((books) =>
      dispatch(actionCreatorBook.fetchBooks(books)),[dispatch]);
  
    const onFetchBorrowed = useCallback((borrowed) => 
      dispatch(actionCreatorBorrow.fetchBorrowed(borrowed)),[dispatch]);
  
    const fetchBooksHandler = useCallback(async() => {
      const loadedBooks = await fetchBooks();
      await onFetchBooks(loadedBooks);
    },[onFetchBooks]);
  
    const fetchBorrowedHandler = useCallback(async() => {
      const loadedBorrowed = await fetchBorrowed();
      onFetchBorrowed(loadedBorrowed)
    },[onFetchBorrowed])

    return {books, borrowed, fetchBooksHandler, fetchBorrowedHandler}
  }
  