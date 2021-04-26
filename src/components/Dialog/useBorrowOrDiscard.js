import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../store/actions/book'

export const useBorrowOrDiscard = () => {

  const dispatch = useDispatch();
  const onBookBorrowed = (selectedBook) => dispatch(actionCreator.borrowBook(selectedBook));
  const onRemoveBook = () => dispatch(actionCreator.removeBookProcess());
  
  const selectedBookIndex = useSelector(state => state.book.selectedBookIndex);
  const books = useSelector(state => state.book.books);

  return {onBookBorrowed, onRemoveBook, selectedBookIndex, books}
}