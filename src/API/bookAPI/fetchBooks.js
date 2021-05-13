

  export const fetchBooks = 
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
      return loadedBooks;

      } catch (error) {
          return error
      }
    }



