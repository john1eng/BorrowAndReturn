import React, { useState, useCallback, useEffect } from 'react'
import styles from "./Shelf.module.css";
import { useSelector, useDispatch } from "react-redux";
import { begEndShelf } from "./utility";
import * as types from '../../shared/types'
import Books from "../Book/Books";
import {ShelfStyled} from './ShelfStyled.js'
import { useFetchBooks } from './useFetchBooks';
import * as actionCreator from '../../store/actions/book'

const Shelf = () => {
  console.log("render shelf")

  const {error, booksDB, fetchBooksHandler} = useFetchBooks();
  const books = useSelector(state => state.book.books);

  const dispatch = useDispatch();
  const onBookAdded = (book) =>
  dispatch(actionCreator.addNewBook(book));

  // const shelfContainer = styles.shelfContainer;
  // const top = styles.top;
  // const sideLeft = styles.sideLeft;
  // const sideRight = styles.sideRight;
  // const bottom = styles.bottom;
  // const space = styles.space;
  const styleArr = ['shelfContainer', 'top', 'sideLeft', 'sideRight', 'bottom', 'space'];
  const [shelfContainer, top, sideLeft, sideRight, bottom, space] = [...styleArr].map((x)=>styles[x])
  
  let shelfWithBooks = [];
  
  

  useEffect(() => {
    fetchBooksHandler();
    // onBookAdded({title: 'tree', page:'M', size:'M', color:'red'});
  },[fetchBooksHandler])

  // console.log(booksDB)
  console.log(books)
  const shelfArr = begEndShelf(books);

  for (let i = 0; i < shelfArr.length; i++) {
    shelfWithBooks.push(
      <ShelfStyled key={i} shelfSpace={types.shelfSpace.width} shelfHeight={types.shelfSpace.height}>
        <div className={top}></div>
        <div className={sideLeft}></div>
        <div className={space} >
          <Books
            books={books}
            beg={shelfArr[i].beg}
            end={shelfArr[i].end}
          />
        </div>
        <div className={sideRight}></div>
        <div className={bottom}></div>
      </ShelfStyled>
    );
  }

  return <div className={shelfContainer}>{shelfWithBooks}</div>;
};

    

export default Shelf
