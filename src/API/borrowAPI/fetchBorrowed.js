

  export const fetchBorrowed = 
    async () => {
      console.log('fetchBorrowedHandler')
      try{
        const response = await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/borrowed.json')
        if(!response.ok){
          throw new Error('Something went wrong!')
        }
        const data = await response.json();
        console.log(data)
        const loadedBorrowed = [];
        for(const key in data){
          loadedBorrowed.push({
            id: key,
            title: data[key].title,
            color: data[key].color,
            page: data[key].page,
            size: data[key].size
          })
        }
      return loadedBorrowed;

      } catch (error) {
          return error
      }
    }



