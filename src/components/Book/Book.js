import React from 'react'
import styles from './Book.module.css';
import * as actionCreator from '../../store/actions/book'
import { useDispatch } from 'react-redux'
import * as types from '../../shared/types'

const Book = ({bookAttr, index}) => {

  const book = styles.book;

  let style = {
    backgroundColor: bookAttr.color,
    height: types.heightSize[bookAttr.size]+'px',
    width: types.pageSize[bookAttr.page]+'px'
  }
  
  const dispatch = useDispatch();

  const onSelectedBook = (index) => dispatch(actionCreator.selectedBookProcess(index));


 
  return(
    <div  className={book} 
          style={style} 
          onClick={()=>onSelectedBook(index)}>
      <span>{bookAttr.title}</span>
    </div>
  )
}

export default Book;