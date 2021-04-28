import styles from './Books.module.css';
import Book from './Book';
import { useBook } from './useBook';

const Books = ({end, beg}) => {

  //styling
  const book = styles.books

  const {books} = useBook();
  console.log(books)
  let booksInShelf =[]
  
  //not the best system to identify there are more books in the shelf then one
  let numOfBook = ((end-beg) === 1) ? books.size : end 

  for(let i = beg; i <= numOfBook; i++){
    console.log(i)
    booksInShelf.push(<Book key={i} bookAttr={books.get(i)} index={i} />)
    console.log(books.get(i))
  }
  
  return(
    <div className={book}>
      {booksInShelf}
    </div>
  )
}


export default Books;