import * as actionTypes from '../actions/actionTypes';
import * as types from '../../shared/types'

const initialState = {
  borrowed: [],
  selectedBorrowIndex: null,
};

const fetchBorrowed = (state, action) => {
  return {
    ...state,
    borrowed: action.payload
  }
}

const sortBorrow = (state, action) => {
  console.log(state.borrowed)
  let copyOfBorrow = JSON.parse(JSON.stringify(state.borrowed))
      copyOfBorrow.sort((a,b) =>  types.bookHeightSize[b.size] - types.bookHeightSize[a.size])
      return {
        ...state,
        borrowed: copyOfBorrow
      }
}

const removeSelectedBorrow = (state, action) => {
  const updatedBorrow = state.borrowed.filter((_, ind) => state.selectedBorrowIndex !== ind)
  return {
    ...state,
    borrowed: updatedBorrow
  }
}

const addBorrow = (state, action) => {
  console.log(action.payload)
  return{
    ...state,
    borrowed: [...state.borrowed, action.payload]
  }
}

const selectedBorrowIndex = (state, action) => {
  return {
    ...state,
    selectedBorrowIndex: action.payload,
  }
}

const borrowReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.FETCH_BORROWED: return fetchBorrowed(state, action)
    case actionTypes.REMOVE_SELECTED_BORROW: return removeSelectedBorrow(state, action);
    case actionTypes.ADD_BORROW: return addBorrow(state, action)
    case actionTypes.SORT_BORROW: return sortBorrow(state, action)  
    case actionTypes.SELECTED_BORROW_INDEX: return selectedBorrowIndex(state, action)
    default: return state;
  }
};

export default borrowReducer;