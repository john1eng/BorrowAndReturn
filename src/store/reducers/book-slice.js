import * as types from '../../shared/types'
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    selectedBookIndex: null,
  },
  reducers: {
    fetchBooks(state, action){
        state.books = action.payload;
    },
  addNewBook(state, action){
    console.log(state.books)
    state.books = [ {title: action.payload.title, color: action.payload.color, page: action.payload.page, size: action.payload.size}]
  },
  sortBook(state, action){
    let copyOfBooks = JSON.parse(JSON.stringify(state.books))
    copyOfBooks.sort((a,b) =>  types.bookHeightSize[b.size] - types.bookHeightSize[a.size])
    state.books = copyOfBooks
  },
  addReturnBook(state, action) {
      state.books = [...state.books, action.payload]
  },
  selectedBookIndex(state, action){
      state.selectedBookIndex = action.payload
  },
  removeSelectedBook(state, action){
    const updatedBooks = state.books.filter((book, id)=> {console.log(id); return state.selectedBookIndex !== id})
    state.books = updatedBooks
  }
  }

})

export const bookActions = bookSlice.actions;
export default bookSlice;