import styles from './Books.module.css';
import Book from './Book';
import { connect } from 'react-redux'

const Books = (props) => {
  //styling
  const books = styles.books

  let booksInShelf =[]
  
  //not the best system to identify there are more books in the shelf then one
  let chooseNum = ((props.end-props.beg) === 1) ? props.books.length : props.end 

  for(let i = props.beg; i < chooseNum; i++){
    booksInShelf.push(<Book key={i} bookAttr={props.books[i]} index={i} />)
  }
  
  return(
    <div className={books}>
      {booksInShelf}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books,
    selectedBook: state.selectedBook
  };
}
export default connect(mapStateToProps)(Books);