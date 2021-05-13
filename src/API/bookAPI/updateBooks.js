export async function updateBooks(books) {
  console.log("updateBook --", books)
  try{
  await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/books.json', {
    method: 'PUT',
    body: JSON.stringify(books),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  }catch(error){
    return error
  }
}