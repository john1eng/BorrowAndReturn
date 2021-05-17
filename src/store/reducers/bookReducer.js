import * as actionTypes from '../actions/actionTypes';
import * as types from '../../shared/types'

const initialState = {
  books: [],
  selectedBookIndex: null,
};

const fetchBooks = (state, action) => {
  return {
    ...state,
    books: action.payload
  }
}

const addNewBook = (state, action) => {
  console.log("add new book")
  console.log(state)
  return {
    ...state,
        books: [...state.books, {
          title:  action.payload.title,
          color:  action.payload.color,
          page:   action.payload.page,
          size:   action.payload.size
        }]
  }
}

const sortBook = (state, action) => {
  let copyOfBooks = JSON.parse(JSON.stringify(state.books))
      copyOfBooks.sort((a,b) =>  types.bookHeightSize[b.size] - types.bookHeightSize[a.size])
      return {
        ...state,
        books: copyOfBooks
      }
}

const addReturnBook = (state, action) => {
  return{
    ...state,
    books: [...state.books, action.payload]
  }
}

const selectedBookIndex = (state, action) => {
  console.log("selectedBookIndex", action.payload)
  return {
    ...state,
    selectedBookIndex: action.payload
  }
}

const removeSelectedBook = (state, action) => {
  console.log("discard book----", state)
  const updatedBooks = state.books.filter((book, id)=> {console.log(id); return state.selectedBookIndex !== id})
  return {
    ...state,
    books: updatedBooks
  }
}

const bookReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.FETCH_BOOKS: return fetchBooks(state, action)
    case actionTypes.ADD_NEW_BOOK: return addNewBook(state, action)
    case actionTypes.SORT_BOOK: return sortBook(state, action)  
    case actionTypes.REMOVE_SELECTED_BOOK: return removeSelectedBook(state, action)
    case actionTypes.SELECTED_BOOK_INDEX: return selectedBookIndex(state, action)
    case actionTypes.ADD_RETURN_BOOK: return addReturnBook(state, action) 
    default: return state;
  }
};

export default bookReducer;