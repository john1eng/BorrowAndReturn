import { useDispatch } from 'react-redux'
import * as actionCreator from '../../store/actions/book'
import { useFetchBooks } from '../Shelf/useFetchBooks';
import { randomNum, title, color, page, size } from "./utility";

export const useFormFunction = () => {

  const {setBooksDB, booksDB} = useFetchBooks();
  const dispatch = useDispatch();
  const onBookAdded = (book) =>
    dispatch(actionCreator.addNewBook(book));

  const onBooksSort = () => dispatch(actionCreator.sortBook());

  async function addBookToDatabase(book) {
    const response = await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/books.json', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const submitBook = (bookForm) => {
    const [title, color, page, size] = ['Title', 'Color', 'Page', 'Size'].map((attr)=>bookForm[attr].value);
    addBookToDatabase({title, color, page, size});
    // setBooks("{title, color, page, size}")
    console.log("submit books")
    // const color = bookForm["Color"].value;
    // const page = bookForm["Page"].value;
    // const size = bookForm["Size"].value;
    onBookAdded({title, color, page, size });
  };

  const randomGenerated = () => {
    const [RandomTitle, RandomColor, RandomPage, RandomSize] = [title, color, page, size].map(data=>data[randomNum(0, data.length)])
    addBookToDatabase({
      title: RandomTitle,
      color: RandomColor,
      page: RandomPage,
      size: RandomSize
    });
    onBookAdded({
      title: RandomTitle,
      color: RandomColor,
      page: RandomPage,
      size: RandomSize
    });
  };

  return {onBooksSort, submitBook, randomGenerated}
}