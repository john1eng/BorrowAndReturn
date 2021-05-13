export const removeAllBooks = async () => {
  console.log('removeBook')
  try{
    const response = await fetch(`https://library-fbc4b-default-rtdb.firebaseio.com/books.json`, {
      method: 'DELETE',
    })
    if(!response.ok){
      throw new Error('Something went wrong!')
    }
  }catch (error) {
    return error;
  }
}