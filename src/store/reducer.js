import * as actionTypes from './actions/actionTypes';
import * as types from '../shared/types'

const initialState = {
  books: [{color:'lightblue', page:'M', size:'L', title:'treasure'}, 
          {color:'pink', page:'M', size:'M', title: 'gold rush'},
          {color:'orange', page: 'M', size:'S', title:'giving dog'}],
  borrowed: [{color:'lightblue', page:'M', size:'L', title:'hunter'},
            {color:'lightgreen', page:'M', size:'L', title:'baker'}],
  showBorrowDialog: false,
  showReturnDialog: false,
  selectedBook: null,
  ref: []
};

const addBook = (state, action) => {
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

const discardBook = (state, action) => {
  const updatedBooks = state.books.filter((_, ind)=> state.selectedBook !== ind);
      return {
        ...state,
        books: updatedBooks,
        showBorrowDialog: false,
      };
}

const discardBorrow = (state, action) => {
  const updatedBorrows = state.borrowed.filter((_, ind)=> state.selectedBook !== ind);
      return {
        ...state,
        borrowed: updatedBorrows,
        showReturnDialog: false,
      };
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

const borrowBook = (state, action) => {
  const updatedBooks1 = state.books.filter((_, ind)=> state.selectedBook !== ind)
      let newBorrowedBook = state.books[state.selectedBook]
      return {
        ...state,
        books: updatedBooks1,
        borrowed: [...state.borrowed, newBorrowedBook],
        showBorrowDialog: false
      }
}

const returnBook = (state, action) => {
  const updateBorrowed = state.borrowed.filter((_, ind) => state.selectedBook !== ind)
      return{
        ...state,
        books: [...state.books, state.borrowed[state.selectedBook]],
        borrowed: updateBorrowed,
        showReturnDialog: false
      }
}

const selectedBook = (state, action) => {
  return {
    ...state,
    selectedBook: action.payload,
    showBorrowDialog: true
  }
}

const selectedBorrow = (state, action) => {
  return {
    ...state,
    selectedBook: action.payload,
    showReturnDialog: true
  }
}

const removeDialog = (state, action) => {
  return {
    ...state,
    showBorrowDialog: false,
    showReturnDialog: false
  }
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_BOOK: return addBook(state, action)
    case actionTypes.DISCARD_BOOK: return discardBook(state, action)     
    case actionTypes.DISCARD_BORROW: return discardBorrow(state, action)
    case actionTypes.SORT_BOOK: return sortBook(state, action)  
    case actionTypes.SORT_BORROW: return sortBorrow(state, action)  
    case actionTypes.BORROW_BOOK: return borrowBook(state, action)
    case actionTypes.RETURN_BOOK: return returnBook(state, action)
    case actionTypes.SELECTED_BOOK: return selectedBook(state, action)
    case actionTypes.SELECTED_BORROW: return selectedBorrow(state, action)
    case actionTypes.REMOVE_DIALOG: return removeDialog(state, action)
    default: return state;
  }
};

export default reducer;