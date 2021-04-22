import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../store/actions/borrow'

export const useBorrowState = () => {

  const dispatch = useDispatch();

  const onSelectedBorrow = (index) => dispatch(actionCreator.selectedBorrowProcess(index))
  const onSortBorrow = ()=> dispatch(actionCreator.sortBorrow());
  const borrowed = useSelector(state => state.borrow.borrowed);

  return {onSelectedBorrow, onSortBorrow, borrowed}
}