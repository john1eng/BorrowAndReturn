import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../store/actions/borrow'

export const useReturnOrDiscardState = () => {

  const dispatch = useDispatch();
  const onBookReturn = (selectedBorrow) => dispatch(actionCreator.returnBook(selectedBorrow));
  const onRemoveBorrow = () => dispatch(actionCreator.removeBorrowProcess());

  const borrowed = useSelector(state => state.borrow.borrowed);
  const selectedBorrowIndex = useSelector(state => state.borrow.selectedBorrowIndex);

  return {onBookReturn, onRemoveBorrow,  borrowed, selectedBorrowIndex}
}