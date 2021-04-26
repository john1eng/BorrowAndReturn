import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../store/actions/book'

export const useBook = () => {

  const dispatch = useDispatch();
  const onSelectedBook = (index) => dispatch(actionCreator.selectedBookProcess(index));

  const books = useSelector(state => state.book.books)

  return {onSelectedBook, books}
}