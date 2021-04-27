import * as actionTypes from '../actions/actionTypes';
import * as types from '../../shared/types'

const initialState = {
  books: [{color:'lightblue', page:'M', size:'L', title:'treasure'}, 
          {color:'pink', page:'M', size:'M', title: 'gold rush'},
          {color:'orange', page: 'M', size:'S', title:'giving dog'}],
  // showBorrowDialog: false,
  selectedBookIndex: null,
};

const addNewBook = (state, action) => {
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
  return {
    ...state,
    selectedBookIndex: action.payload
  }
}

// const toggleBorrowDialog = (state, action) => {
//   return {
//     ...state,
//     showBorrowDialog: !state.showBorrowDialog
//   }
// };

const removeSelectedBook = (state, action) => {
  console.log(state.selectedBookIndex)
  const updatedBooks = state.books.filter((_, ind)=> state.selectedBookIndex !== ind)
  return {
    ...state,
    books: updatedBooks
  }
}

// const closeBorrowDialog = (state, action)  => {
//   return {
//     ...state,
//     showBorrowDialog: false
//   }
// }

const bookReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_NEW_BOOK: return addNewBook(state, action)
    case actionTypes.SORT_BOOK: return sortBook(state, action)  
    case actionTypes.REMOVE_SELECTED_BOOK: return removeSelectedBook(state, action)
    case actionTypes.SELECTED_BOOK_INDEX: return selectedBookIndex(state, action)
    // case actionTypes.TOGGLE_BORROW_DIALOG: return toggleBorrowDialog(state, action)
    case actionTypes.ADD_RETURN_BOOK: return addReturnBook(state, action) 
    // case actionTypes.CLOSE_BORROW_DIALOG: return closeBorrowDialog(state, action) 
    default: return state;
  }
};

export default bookReducer;