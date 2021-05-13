export async function updateBorrowed(borrowedBooks) {
  try{
  await fetch('https://library-fbc4b-default-rtdb.firebaseio.com/borrowed.json', {
    method: 'PUT',
    body: JSON.stringify(borrowedBooks),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  }catch(error){
    return error
  }
}