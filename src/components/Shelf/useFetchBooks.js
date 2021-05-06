import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actionCreator from '../../store/actions/book'

export const useFetchBooks = () =>{

  const dispatch = useDispatch();
  const onFetchBooks = (books) =>
  dispatch(actionCreator.fetchBooks(books));

  const books = useSelector(state => state.book.books);

  const [error, setError] = useState(null);
  const [booksDB, setBooksDB] = useState([]);
  const fetchBooksHandler = useCallback(

    async () => {
      console.log('fetchBooksHandler')
      try{
        const response = await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/books.json')
        if(!response.ok){
          throw new Error('Something went wrong!')
        }
        const data = await response.json();
        console.log(data)
        const loadedBooks = [];
        for(const key in data){
          loadedBooks.push({
            id: key,
            title: data[key].title,
            color: data[key].color,
            page: data[key].page,
            size: data[key].size
          })
        }

        //test delete method
        const deleteM = await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/books/-MZmrCF3FrOEsPu2QiQd.json', {
          method: 'DELETE',
        });
        // deleteM();

        setBooksDB(loadedBooks);
        onFetchBooks(loadedBooks);
        
      } catch (error) {
        setError(error)
      }
  
    },
    [],
  )

  return {
    error,
    booksDB,
    setBooksDB,
    fetchBooksHandler
  }

}
