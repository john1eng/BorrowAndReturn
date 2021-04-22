import styles from './Books.module.css';
import Book from './Book';
import { useSelector } from 'react-redux'

const Books = ({end, beg}) => {

  //styling
  const book = styles.books

  const books = useSelector(state => state.book.books)

  let booksInShelf =[]
  
  //not the best system to identify there are more books in the shelf then one
  let numOfBook = ((end-beg) === 1) ? books.length : end 

  for(let i = beg; i < numOfBook; i++){
    booksInShelf.push(<Book key={i} bookAttr={books[i]} index={i} />)
  }
  
  return(
    <div className={book}>
      {booksInShelf}
    </div>
  )
}


export default Books;