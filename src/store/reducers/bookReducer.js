import * as actionTypes from "../actions/actionTypes";
import * as types from "../../shared/types";

const books = new Map([
  [1, { color: "lightblue", page: "M", size: "L", title: "treasure" }],
  [2, { color: "pink", page: "M", size: "M", title: "gold rush" }],
  [3, { color: "orange", page: "M", size: "S", title: "giving dog" }],
]);

const initialState = {
  // books: [{color:'lightblue', page:'M', size:'L', title:'treasure'},
  //         {color:'pink', page:'M', size:'M', title: 'gold rush'},
  //         {color:'orange', page: 'M', size:'S', title:'giving dog'}],
  books,
  selectedBookIndex: null,
};

const addNewBook = (state, action) => {
  let books = new Map(state.books);
  books = books.set(state.books.size + 1, {
    color: action.payload.color,
    page: action.payload.page,
    size: action.payload.size,
    title: action.payload.title,
  });
  console.log(books);
  return {
    ...state,
    books,
  };
};

const sortBook = (state, action) => {
  // // let copyOfBooks = JSON.parse(JSON.stringify(state.books))

  // //convert to array
  // let booksArray = Array.from(state.books, (map) => map);
  // //sort array
  // booksArray.sort(
  //   (a, b) => types.bookHeightSize[b[1].size] - types.bookHeightSize[a[1].size]
  // );
  // //change the key (will be) into increment number
  // for (let i = 0; i < booksArray.length; i++) {
  //   booksArray[i][0] = i + 1;
  // }

  // //convert to Map object
  // let books = new Map([...booksArray]);

  let books = new Map(state.books);
  
  //convert to itterate then to array
  let itter = [...books.entries()];
  //sort
  itter = itter.sort((a, b) =>  types.bookHeightSize[b[1].size] - types.bookHeightSize[a[1].size])
  //change the key (will be) into increment number
  // itter.forEach((__,index) => itter[index][0] = index+1);
  //conver to map
  books = new Map(itter)
 
  return {
    ...state,
    books,
  };
};

const addReturnBook = (state, action) => {
  return {
    ...state,
    books: [...state.books, action.payload],
  };
};

const selectedBookIndex = (state, action) => {
  return {
    ...state,
    selectedBookIndex: action.payload,
  };
};

// const toggleBorrowDialog = (state, action) => {
//   return {
//     ...state,
//     showBorrowDialog: !state.showBorrowDialog
//   }
// };

const removeSelectedBook = (state, action) => {
  console.log(state.selectedBookIndex);
  // const updatedBooks = state.books.filter((_, ind)=> state.selectedBookIndex !== ind)
  let books = new Map(state.books);
  books.delete(state.selectedBookIndex);
  return {
    ...state,
    books,
  };
};

// const closeBorrowDialog = (state, action)  => {
//   return {
//     ...state,
//     showBorrowDialog: false
//   }
// }

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_BOOK:
      return addNewBook(state, action);
    case actionTypes.SORT_BOOK:
      return sortBook(state, action);
    case actionTypes.REMOVE_SELECTED_BOOK:
      return removeSelectedBook(state, action);
    case actionTypes.SELECTED_BOOK_INDEX:
      return selectedBookIndex(state, action);
    // case actionTypes.TOGGLE_BORROW_DIALOG: return toggleBorrowDialog(state, action)
    case actionTypes.ADD_RETURN_BOOK:
      return addReturnBook(state, action);
    // case actionTypes.CLOSE_BORROW_DIALOG: return closeBorrowDialog(state, action)
    default:
      return state;
  }
};

export default bookReducer;
