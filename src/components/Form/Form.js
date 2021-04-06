import React from 'react';
import { connect } from 'react-redux'
import styles from './Form.module.css'
import * as actionTypes from '../../store/actions/actionTypes'
import {randomNum} from './utility';

import FormField from './FormField'

const formfields = [
  {label: 'Title', type: 'text', name: 'title'},
  {label: 'Color', type: 'text', name: 'color'},
  {label: 'Page', type: 'text', name: 'page'},
  {label: 'Size', type: 'text', name: 'size'},
  ]
  
  const Form = ({onBookAdded, onBooksSort}) => {
    console.log("Render Form")
  //style
  const formStyle = styles.form

  const [title, setTitle] = React.useState('');
  const [color, setColor] = React.useState('lightblue');
  const [page, setPage] = React.useState('M');
  const [size, setSize] = React.useState('M');
  const setBookStates = {
    setTitle, setColor, setPage, setSize
  }
  const bookStates = {title, color, page, size}
  
  
  const form = formfields.map((data, i)=>(
    <FormField key={i} bookSetState={setBookStates} {...data}/>
  ))

  const submitBookHandler = (e) => {
    onBookAdded(bookStates)
  }
  
  const randomGenerated = (e) => {
    const title = ['George', 'Americanah', 'Angelmaker', 'Annabel', 'Annihilation', 'Away'];
    const color = ['lightblue','lightgreen','pink','orange','gray','lightpurple','red', 'white', 'yellow', 'brown'];
    const page = ['S','M','L'];
    const size = ['S','M','L']
    
    onBookAdded({title:title[randomNum(0,6)],
                      color:color[randomNum(0,10)],
                      page:page[randomNum(0,3)],
                      size:size[randomNum(0,3)]})
  }

  return (
    <>
      <form className={formStyle} >
        {form}
      </form>
      <div>
        <button className={styles.button} onClick={submitBookHandler}>submit</button>
        <button className={styles.button} onClick={randomGenerated}>random</button>
        <button className={styles.button} onClick={onBooksSort}>sort</button>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onBookAdded: (book) => dispatch({type: actionTypes.ADD_NEW_BOOK, payload:book}),
    onBooksSort: () => dispatch({type: actionTypes.SORT_BOOK})
  }
}
export default connect(null, mapDispatchToProps)(Form)