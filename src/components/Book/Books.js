import styles from './Books.module.css';
import Book from './Book';

const Books = ({end, beg, books}) => {

  //styling
  const book = styles.books

  let booksInShelf =[]
  
  //not the best system to identify there are more books in the shelf then one
  let numOfBook = ((end-beg) === 1) ? books.length : end 

  for(let i = beg; i < numOfBook; i++){
    booksInShelf.push(<Book key={i} bookAttr={books[i]} id={i} />)
  }
  
  return(
    <div className={book}>
      {booksInShelf}
    </div>
  )
}


export default Books;