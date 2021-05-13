import { addBook } from "./addBook"

export async function addBooks(books) {
  console.log("addBooks", books)
  for(let book of books){

    addBook({title:book.title, page: book.page, size: book.size, color: book.color})
  }
}