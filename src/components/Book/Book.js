import React from 'react'
import styles from './Book.module.css';
import * as actionCreator from '../../store/actions/book'
import { useDispatch } from 'react-redux'
import * as types from '../../shared/types'

/**
 * individual book attribute
 */
const Book = ({bookAttr, index}) => {
  const [color, size, page, title] = ['color', 'size', 'page', 'title'].map((attr)=>bookAttr[attr]);

  const book = styles.book;

  let style = {
    backgroundColor: color,
    height: types.heightSize[size]+'px',
    width: types.pageSize[page]+'px'
  }
  
  const dispatch = useDispatch();
  const onSelectedBook = (index) => dispatch(actionCreator.selectedBookProcess(index));

  return(
    <div  className={book} 
          style={style} 
          onClick={()=>onSelectedBook(index)}>
      <span>{title}</span>
    </div>
  )
}

export default Book;