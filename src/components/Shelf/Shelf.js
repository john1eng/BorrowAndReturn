import React, { useState, useCallback, useEffect } from 'react'
import styles from "./Shelf.module.css";
import { useSelector } from "react-redux";
import { begEndShelf } from "./utility";
import * as types from '../../shared/types'
import Books from "../Book/Books";
import {ShelfStyled} from './ShelfStyled.js'

const Shelf = () => {
  console.log("render shelf")


  // const books = useSelector(state => state.book.books);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  // const shelfContainer = styles.shelfContainer;
  // const top = styles.top;
  // const sideLeft = styles.sideLeft;
  // const sideRight = styles.sideRight;
  // const bottom = styles.bottom;
  // const space = styles.space;
  const styleArr = ['shelfContainer', 'top', 'sideLeft', 'sideRight', 'bottom', 'space'];
  const [shelfContainer, top, sideLeft, sideRight, bottom, space] = [...styleArr].map((x)=>styles[x])
  
  let shelfWithBooks = [];
  
  const fetchBooksHandler = useCallback(
    async () => {
      try{
        const response = await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/books.json')
        if(!response.ok){
          throw new Error('Something went wrong!')
        }
        const data = await response.json();
        console.log(data)
        const loadedBooks = [];
        for(const key in data){
          loadedBooks.push({
            id: key,
            title: data[key].title,
            color: data[key].color,
            page: data[key].page,
            size: data[key].size
          })
        }
        setBooks(loadedBooks);
      } catch (error) {
        setError(error)
      }

    },
    [],
  )

  useEffect(() => {
    fetchBooksHandler();
  },[fetchBooksHandler])

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
