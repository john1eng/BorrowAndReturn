import * as actionTypes from './actions/actionTypes';
import * as types from '../shared/types'

const initialState = {
  books: [{color:'lightblue', page:'M', size:'L', title:'treasure'}, 
          {color:'pink', page:'M', size:'M', title: 'gold rush'},
          {color:'orange', page: 'M', size:'S', title:'giving dog'}],
  borrowed: [{color:'lightblue', page:'M', size:'L', title:'hunter'},
            {color:'lightgreen', page:'M', size:'L', title:'baker'}],
  dialog: {
    showBorrow: false,
    showReturn: false,
  },
  selectedBook: null,
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
      copyOfBooks.sort((a,b) =>  types.heightSize[b.size] - types.heightSize[a.size])
      return {
        ...state,
        books: copyOfBooks
      }
}
const sortBorrow = (state, action) => {
  console.log(state.borrowed)
  console.log("hello")
  let copyOfBorrow = JSON.parse(JSON.stringify(state.borrowed))
      copyOfBorrow.sort((a,b) =>  types.heightSize[b.size] - types.heightSize[a.size])
      return {
        ...state,
        borrowed: copyOfBorrow
      }
}

// const borrowBook = (state, action) => {
//   const updatedBooks1 = state.books.filter((_, ind)=> state.selectedBook !== ind)
//       let newBorrowedBook = state.books[state.selectedBook]
//       return {
//         ...state,
//         books: updatedBooks1,
//         borrowed: [...state.borrowed, newBorrowedBook],
//         showBorrowDialog: false
//       }
// }
const removeBorrow = (state, action) => {
  const updatedBorrow = state.borrowed.filter((_, ind) => state.selectedBook !== ind)
  return {
    ...state,
    borrowed: updatedBorrow
  }
}

const addBorrow = (state, action) => {
  return{
    ...state,
    borrowed: [...state.borrowed, state.books[state.selectedBook]]
  }
}

const removeBook = (state, action) => {
  const updatedBooks = state.books.filter((_, ind)=> state.selectedBook !== ind)
  return {
    ...state,
    books: updatedBooks
  }
}

const addReturnBook = (state, action) => {
  return{
    ...state,
    books: [...state.books, state.borrowed[state.selectedBook]]
  }
}

// const returnBook = (state, action) => {
//   const updateBorrowed = state.borrowed.filter((_, ind) => state.selectedBook !== ind)
//       return{
//         ...state,
//         books: [...state.books, state.borrowed[state.selectedBook]],
//         borrowed: updateBorrowed,
//         showReturnDialog: false
//       }
// }

const selectedBook = (state, action) => {
  return {
    ...state,
    selectedBook: action.payload
  }
}

const selectedBorrow = (state, action) => {
  return {
    ...state,
    selectedBook: action.payload,
  }
}

const toggleReturnDialog = (state, action) => {
  return {
    ...state,
    dialog: {...state.dialog, showReturn: !state.dialog.showReturn}
  }
}

const toggleBorrowDialog = (state, action) => {
  return {
    ...state,
    dialog: {...state.dialog, showBorrow: !state.dialog.showBorrow}
  }
}



const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_NEW_BOOK: return addNewBook(state, action)
    case actionTypes.SORT_BOOK: return sortBook(state, action)  
    case actionTypes.SORT_BORROW: return sortBorrow(state, action)  
    // case actionTypes.BORROW_BOOK: return borrowBook(state, action)
    case actionTypes.REMOVE_BOOK: return removeBook(state, action)
    case actionTypes.ADD_RETURN_BOOK: return addReturnBook(state, action)
    case actionTypes.REMOVE_BORROW: return removeBorrow(state, action);
    case actionTypes.ADD_BORROW: return addBorrow(state, action)
    // case actionTypes.RETURN_BOOK: return returnBook(state, action)
    case actionTypes.SELECTED_BOOK: return selectedBook(state, action)
    case actionTypes.SELECTED_BORROW: return selectedBorrow(state, action)
    case actionTypes.TOGGLE_RETURN_DIALOG: return toggleReturnDialog(state, action)
    case actionTypes.TOGGLE_BORROW_DIALOG: return toggleBorrowDialog(state, action)
    default: return state;
  }
};

export default reducer;