import React from 'react'
import styles from './Book.module.css';
import * as actionCreator from '../../store/actions/book'
import { connect } from 'react-redux'
import * as types from '../../shared/types'

const Book = (props) => {
  
  const storeRef = React.useRef("hello");
  const book = styles.book;

  let style = {
    backgroundColor: props.bookAttr.color,
    height: types.heightSize[props.bookAttr.size]+'px',
    width: types.pageSize[props.bookAttr.page]+'px'
  }
 
  return(
    <div  ref={storeRef}
          className={book} 
          style={style} 
          onClick={()=>props.onSelectedBook(props.index)}>
      <span>{props.bookAttr.title}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectedBook: (index) => dispatch(actionCreator.selectedBookProcess(index))
  }
}

export default connect(null,mapDispatchToProps)(Book);