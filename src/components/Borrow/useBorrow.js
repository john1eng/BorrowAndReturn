import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../store/actions/borrow'

export const useBorrow = () => {

  const dispatch = useDispatch();

  const onSelectedBorrow = (id) => dispatch(actionCreator.selectedBorrowProcess(id))
  const onSortBorrow = ()=> dispatch(actionCreator.sortBorrow());
  const borrowed = useSelector(state => state.borrow.borrowed);

  return {onSelectedBorrow, onSortBorrow, borrowed}
}