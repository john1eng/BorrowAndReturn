import { useDispatch } from 'react-redux'
import * as actionCreator from '../../store/actions/book'
import { randomNum, title, color, page, size } from "./utility";

export const useFormFunction = () => {

  const dispatch = useDispatch();
  const onBookAdded = (book) =>
    dispatch(actionCreator.addNewBook(book));

  const onBooksSort = async (state) => {
    await dispatch(actionCreator.sortBook())
    };

  const submitBook = async(bookForm) => {
    const [title, color, page, size] = ['Title', 'Color', 'Page', 'Size'].map((attr)=>bookForm[attr].value);
    onBookAdded({title, color, page, size});
  };

  const randomGenerated = () => {
    const [RandomTitle, RandomColor, RandomPage, RandomSize] = [title, color, page, size].map(data=>data[randomNum(0, data.length)])

    onBookAdded({
      title: RandomTitle,
      color: RandomColor,
      page: RandomPage,
      size: RandomSize
    });
  };

  return {onBooksSort, submitBook, randomGenerated}
}