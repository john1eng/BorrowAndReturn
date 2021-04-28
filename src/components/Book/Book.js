import React from 'react'
import styles from './Book.module.css';
import * as types from '../../shared/types'
import { useBook } from './useBook';

/**
 * individual book attribute
 */
const Book = ({bookAttr, index}) => {
  
  const [color, size, page, title] = ['color', 'size', 'page', 'title'].map((attr)=>bookAttr[attr]);
  // const color = 'red';
  // const size = "M";
  // const page = "M";
  // const title = "totot";

  const {onSelectedBook} = useBook(); 

  const book = styles.book;

  let style = {
    backgroundColor: color,
    height: types.bookHeightSize[size]+'px',
    width: types.bookPageSize[page]+'px'
  }
  
  

  return(
    <div  className={book} 
          style={style} 
          onClick={()=>onSelectedBook(index)}>
      <span>{title}</span>
    </div>
  )
}

export default Book;