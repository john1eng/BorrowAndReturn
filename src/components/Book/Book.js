import React from 'react'
import styles from './Book.module.css';
import * as types from '../../shared/types'
import { useBook } from './useBook';

/**
 * individual book
 */
const Book = ({bookAttr, id}) => {
  const [color, size, page, title] = ['color', 'size', 'page', 'title'].map((attr)=>bookAttr[attr]);
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
          onClick={()=>onSelectedBook(id)}>
      <span>{title}</span>
    </div>
  )
}

export default Book;