import { useDispatch, useSelector } from 'react-redux'
import * as actionCreator from '../../store/actions/book'
import { randomNum, title, color, page, size } from "./utility";
import { addBook } from '../../API/bookAPI/addBook';
import { bookPageSize } from '../../shared/types';

export const useFormFunction = () => {

  const books = useSelector(state => state.book.books);

  const dispatch = useDispatch();
  const onBookAdded = (book) =>
    dispatch(actionCreator.addNewBook(book));

  const onBooksSort = async (state) => {
    await dispatch(actionCreator.sortBook())
    };

  // async function addBookToDatabase(book) {
  //   const response = await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/books.json', {
  //     method: 'POST',
  //     body: JSON.stringify(book),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const data = await response.json();
  //   return data.name;
  // }

  const submitBook = async(bookForm) => {
    const [title, color, page, size] = ['Title', 'Color', 'Page', 'Size'].map((attr)=>bookForm[attr].value);
    // const id = await addBook({title, color, page, size});
    // setBooks("{title, color, page, size}")
    // const color = bookForm["Color"].value;
    // const page = bookForm["Page"].value;
    // const size = bookForm["Size"].value;
    onBookAdded({title, color, page, size});
  };

  const randomGenerated = () => {
    const [RandomTitle, RandomColor, RandomPage, RandomSize] = [title, color, page, size].map(data=>data[randomNum(0, data.length)])
    // const id = addBook({
    //   title: RandomTitle,
    //   color: RandomColor,
    //   page: RandomPage,
    //   size: RandomSize
    // });
    onBookAdded({
      // id: id,
      title: RandomTitle,
      color: RandomColor,
      page: RandomPage,
      size: RandomSize
    });
  };

  return {onBooksSort, submitBook, randomGenerated}
}