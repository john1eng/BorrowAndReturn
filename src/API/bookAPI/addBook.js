export async function addBook(book) {
  console.log(book)
  try{
  const response = await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/books.json', {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data.name;
  }catch(error){
    return error
  }
}